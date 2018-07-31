import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class StudentsFilters extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showInactive: false,
      showNonEnrolled: true,
    };
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.checked });
  }

  render() {
    const { open, onClose, onSave } = this.props;
    const { showInactive, showNonEnrolled } = this.state;

    return (
      <Dialog
        onClose={onClose}
        open={open}
      >
        <DialogTitle>
          Filtros para la lista de estudiantes
        </DialogTitle>
        <DialogContent>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showInactive}
                  onChange={(e) => this.handleChange('showInactive', e)}
                  value="showInactive"
                  color="primary"
                />
              }
              label="Mostrar inactivos"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showNonEnrolled}
                  onChange={(e) => this.handleChange('showNonEnrolled', e)}
                  value="showNonEnrolled"
                  color="primary"
                />
              }
              label="Mostrar no enrolados"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            color="secondary"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => onSave(this.state)}
            color="primary"
          >
            Aplicar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

StudentsFilters.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default withTheme()(StudentsFilters);
