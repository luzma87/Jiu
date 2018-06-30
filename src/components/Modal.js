import React, {Fragment} from 'react';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
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
        <Typography variant="title" id="modal-title" color="primary">
          {this.props.title}
        </Typography>
        <Typography variant="subheading" id="simple-modal-description" className="modal-message">
          {this.props.message}
        </Typography>
      </Fragment>
    )
  }

  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
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
