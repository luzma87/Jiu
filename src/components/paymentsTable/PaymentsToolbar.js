import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
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
  actions() {
    // return (
    //   <Fragment>
    //     <Tooltip title="Filtrar lista">
    //       <IconButton onClick={this.props.onFilterClick}>
    //         <FontAwesomeIcon icon={['far', 'filter']} />
    //       </IconButton>
    //     </Tooltip>
    //   </Fragment>
    // );
  }

  render() {
    const { classes, title } = this.props;

    return (
      <Toolbar
        className={classNames(classes.root)}
      >
        <div className={classes.title}>
          <Typography
            variant="title"
            id="tableTitle"
          >
            {title}
          </Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {this.actions()}
        </div>
      </Toolbar>
    );
  }
}

PaymentsToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onPaymentClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaymentsToolbar);
