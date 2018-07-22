import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class StudentsFilters extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showInactive: true,
    };
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.checked });
  }

  render() {
    const { open, onClose, onSave } = this.props;
    const { showInactive } = this.state;

    return (
      <Dialog
        onClose={onClose}
        open={open}
      >
        <DialogTitle>
          Filtros para la lista de estudiantes
        </DialogTitle>
        <DialogContent>
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

export default withTheme()(StudentsFilters);
