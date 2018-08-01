import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

class PaymentsToolbar extends React.Component {
  selectedString() {
    const { numSelected } = this.props;
    if (numSelected === 0) {
      return '';
    }
    if (numSelected === 1) {
      return '1 pago seleccionado ';
    }
    return `${numSelected} pagos seleccionados `;
  }

  selectedActions() {
    const { numSelected } = this.props;
    if (numSelected === 0) {
      return this.noneSelectedActions();
    }
    return this.oneOrMoreSelectedActions();
  }

  noneSelectedActions() {
    return (
      <Fragment>
        <Tooltip title="Filtrar lista">
          <IconButton onClick={this.props.onFilterClick}>
            <FontAwesomeIcon icon={['far', 'filter']} />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  }

  oneOrMoreSelectedActions() {
    return (
      <Fragment>
        <Tooltip title="Registrar Pago">
          <IconButton onClick={this.props.onPaymentClick}>
            <FontAwesomeIcon icon={['far', 'coins']} />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  }

  render() {
    const { numSelected, classes, title } = this.props;

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
               {title}
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

PaymentsToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onPaymentClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaymentsToolbar);
