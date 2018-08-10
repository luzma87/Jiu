import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import Button from '../../node_modules/@material-ui/core/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../util/constants';

class CustomButton extends React.Component {

  getIcon() {
    const { icon, loading } = this.props;
    if (loading) {
      return constants.loadingGif(60, 60);
    }
    const hasIcon = icon !== null;
    if (hasIcon) {
      return (<FontAwesomeIcon
        icon={icon}
        size="lg"
        style={{ marginRight: 15 }}
      />);
    }
    return null;
  }

  render() {
    const { label, onClick, loading } = this.props;
    const shownLabel = loading ? '' : label;
    return (
      <Button
        onClick={() => onClick()}
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {this.getIcon()}
        {shownLabel}
      </Button>
    );
  }
}

CustomButton.defaultProps = {
  icon: null,
  loading: false,
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.array,
  loading: PropTypes.bool,
};

export default withTheme()(CustomButton);
