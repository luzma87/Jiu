import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import studentClient from '../../rest/StudentClient';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
    ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
    : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    display: 'flex',
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

class TableToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };

    studentClient.getAllStudents().then((response) => {
      this.setState({ students: response.data });
    });
  }

  selectedString() {
    const { numSelected } = this.props;
    if (numSelected === 0) {
      return '';
    }
    if (numSelected === 1) {
      return 'Seleccionado 1 estudiante';
    }
    return `Seleccionados ${numSelected} estudiantes`;
  }

  selectedActions() {
    const { numSelected } = this.props;
    if (numSelected === 0) {
      return this.noneSelectedActions();
    }
    if (numSelected === 1) {
      return this.oneSelectedActions();
    }
    return this.manySelectedActions();
  }

  noneSelectedActions() {
    return (
      <Fragment>
        <Tooltip title="Filtrar lista">
          <IconButton
            aria-label="Filtrar lista"
            onClick={this.props.onFilterClick}
          >
            <FontAwesomeIcon icon="filter" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Agregar estudiante">
          <IconButton
            component={Link}
            to="/studentForm"
          >
            <FontAwesomeIcon icon="user-plus" />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  }

  oneSelectedActions() {
    return (
      <Fragment>
        <Tooltip title="Editar">
          <IconButton
            aria-label="Editar"
            onClick={this.props.onEditClick}
          >
            <FontAwesomeIcon icon="pencil-alt" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Registrar Pago">
          <IconButton
            aria-label="Registrar Pago"
            onClick={this.props.onPaymentClick}
          >
            <FontAwesomeIcon icon="coins" />
          </IconButton>
        </Tooltip>
        {this.manySelectedActions()}
      </Fragment>
    );
  }

  manySelectedActions() {
    return (
      <Fragment>
        <Tooltip
          title="Desactivar"
          onClick={this.props.onDeactivateClick}
        >
          <IconButton aria-label="Desactivar">
            <FontAwesomeIcon icon="toggle-off" />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  }

  render() {
    const { numSelected, classes } = this.props;

    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography
              color="inherit"
              variant="subheading"
            >
              {this.selectedString()}
            </Typography>
          ) : (
             <Typography
               variant="title"
               id="tableTitle"
             >
               Estudiantes
             </Typography>
           )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {this.selectedActions()}
        </div>
      </Toolbar>
    );
  }
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onDeactivateClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onPaymentClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableToolbar);
