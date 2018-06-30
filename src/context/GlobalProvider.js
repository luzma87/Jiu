import * as React from 'react';
import MyContext from './MyContext';
import parametersClient from './../rest/ParametersClient';
import Modal from './../components/Modal';

export default class GlobalProvider extends React.Component {

  constructor(props) {
    super();
    this.state = {
      maritalStatus: [],
      paymentMethods: [],
      ranks: [],
      plans: [],
      gender: [{ id: "M", description: "Masculino"}, { id: "F", description: "Femenino" }],
      modal: {
        show: false,
        isLoader: true,
        message: "Mensaje",
        title: "Default"
      },
      toggleModal: this.updateModalState.bind(this)
    };
    this.loadParameters();
  }

  updateModalState(isLoader, message, title) {
    let modal = this.state.modal;
    modal.show = !modal.show;
    modal.isLoader = isLoader;
    modal.message = message;
    modal.title = title;
    this.setState({ modal })
  }

  loadParameters() {
    let component = this;
    parametersClient.getMaritalStatus().then(function (response) {
      component.setState({
        maritalStatus: response.data
      });
    });
    parametersClient.getPaymentMethods().then(function (response) {
      component.setState({
        paymentMethods: response.data
      });
    });
    parametersClient.getPlans().then(function (response) {
      component.setState({
        plans: response.data
      });
    });
    parametersClient.getRanks().then(function (response) {
      component.setState({
        ranks: response.data
      });
    });
  }

  showModal() {
    let modal =  this.state.modal;
    return modal.show ? <Modal title={modal.title} message={modal.message} isLoader={modal.isLoader} onClose={ () => this.updateModalState(false) }/> : '';
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
