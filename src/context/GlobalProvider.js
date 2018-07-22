import * as React from 'react';
import MyContext from './MyContext';
import parametersClient from './../rest/ParametersClient';
import Modal from './../components/Modal';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class GlobalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maritalStatus: [],
      paymentMethods: [],
      ranks: [],
      plans: [],
      params: [],
      gender: [{ id: 'M', description: 'Masculino' }, { id: 'F', description: 'Femenino' }],
      modal: {
        show: false,
        isLoader: true,
        message: '',
        title: '',
      },
      toggleModal: this.updateModalState.bind(this),
      redirectTo: this.redirectTo.bind(this),
    };
    this.loadParameters();
  }

  redirectTo(path) {
    this.props.history.push(path);
  }

  updateModalState(show, isLoader, title, message) {
    let modal = this.state.modal;
    modal.show = show;
    modal.isLoader = isLoader !== undefined ? isLoader : true;
    modal.message = message || '';
    modal.title = title || '';
    this.setState({ modal });
  }

  loadParameters() {
    let component = this;
    parametersClient.getAll()
      .then(axios.spread((maritalStatus, plans, paymentMethods, ranks, params) => {
        component.setState({
          maritalStatus: maritalStatus.data,
          paymentMethods: paymentMethods.data,
          plans: plans.data,
          ranks: ranks.data,
          params: params.data,
        });
      }))
      .catch((error) => {
        this.updateModalState(true, false, 'Error',
          'No se pudo conectar con el servidor: ' + error);
      });
  }

  showModal() {
    let modal = this.state.modal;
    return modal.show ?
           <Modal
             title={modal.title}
             message={modal.message}
             isLoader={modal.isLoader}
             onClick={() => this.updateModalState(false)}
           /> :
           '';
  }

  render() {
    const state = {
      state: this.state,
    };

    return (
      <MyContext.Provider value={state}>
        {this.showModal()}
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default withRouter(GlobalProvider);
