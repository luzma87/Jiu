import React, {Fragment} from 'react';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button/Button';
import gif from './../assets/loader.svg'

class SimpleModal extends React.Component {

  constructor(){
    super();
  }

  showGif() {
    return <img src={gif} width="100%" height="100%"/>;
  }

  showText() {
    return(
      <Fragment>
        <div className="title">
          <Typography variant="title" id="modal-title" color="primary">
            {this.props.title}
          </Typography>
        </div>
        <div className="body">
          <Typography variant="subheading" id="simple-modal-description" className="modal-message">
            {this.props.message}
          </Typography>
        </div>
        <div className="buttons">
          <Button onClick={this.props.onClick} variant="outlined" >
            Cerrar
          </Button>
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <div>
        <Modal
          className={!this.props.isLoader ? 'large' : ''}
          open={true}
          onClose={this.props.onClose}
        >
          <div className="modal">
            { this.props.isLoader ? this.showGif() : this.showText() }
          </div>
        </Modal>
      </div>
    );
  }
}

export default withTheme()(SimpleModal);
