import React from 'react';
import { withTheme } from '@material-ui/core/styles/index';
import { withContext } from '../context/WithContext';
import FormTitle from './fields/FormTitle';
import Select from './fields/Select';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import paymentClient from '../rest/PaymentClient';
import constants from '../util/constants';
import PaymentsTable from './paymentsTable/PaymentsTable';
import CustomButton from './CustomButton';

const renderNoPayments = () => {
  return (
    <Typography
      variant="title"
      className="title"
      color="secondary"
    >
      No hay pagos generados para este mes
      <FontAwesomeIcon
        icon={['far', 'piggy-bank']}
        size="2x"
        style={{ marginLeft: 15 }}
      />
    </Typography>
  );
};

class Payments extends React.Component {
  constructor(props) {
    super(props);
    const currentYear = constants.currentDate.year.toString();
    const currentMonth = constants.currentDate.month.toString();
    this.state = {
      year: currentYear,
      month: currentMonth,
      payments: [],
      loading: true,
    };
    this.getPayments(currentMonth, currentYear);
  }

  getPayments(month, year) {
    paymentClient.getAllForMonth({ year, month })
      .then((response) => {
        this.setState({ payments: response.data, loading: false });
      });
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      payments: [],
      [name]: target.value,
      loading: true,
    }, () => {
      const { year, month } = this.state;
      this.getPayments(month, year);
    });
  }

  handleChange(id, value) {
    let payments = this.state.payments;
    let payment = payments.find(payment => payment.id === id);
    payment.amountPayed = value;
    this.setState({ payments })
  }

  saveButtonClick(id) {
    let payments = this.state.payments;
    let payment = payments.find(payment => payment.id === id);
    const { context } = this.props;
    if(payment.amountPayed !== "" && payment.amountPayed !== null && payment.amountPayed !== undefined) {
      context.toggleModal(true);
      payment.date = constants.formatDateForServer(new Date());
      paymentClient.save(payment, () => {
        context.toggleModal(false);
        this.setState({ payments })
      }, error => {
        context.toggleModal(true, false, 'Error guardando el pago '+error);
      });
    }
  }

  onGenerateClick() {
    this.setState({ payments: [], loading: true });
    const { year, month } = this.state;
    paymentClient.createForMonth({ year, month }).then((response) => {
      this.setState({ payments: response.data.result.result, loading: false });
    });
  }


  renderPaymentsTable(payments){
    return <PaymentsTable payments={payments} handleChange={(index, value) => this.handleChange (index, value)} saveButtonClick={id => this.saveButtonClick(id)} />;
  };

  render() {
    const { context } = this.props;
    const { payments, loading } = this.state;
    return (
      <div>
        <div className="container gridContainer">
          <FormTitle label="Pagos" />
          <Select
            label="Año"
            id="year"
            value={this.state.year}
            options={context.years}
            onChange={e => this.onChange(e)}
          />
          <Select
            label="Mes"
            id="month"
            value={this.state.month}
            options={context.months}
            onChange={e => this.onChange(e)}
          />
          <div className="smallizer">
            <CustomButton
              label="Generar"
              icon={['far', 'money-bill-alt']}
              onClick={() => this.onGenerateClick()}
              loading={loading}
            />
          </div>
        </div>
        <div className="container payments-table">
          {payments.length === 0 ? renderNoPayments() : this.renderPaymentsTable(payments)}
        </div>
      </div>
    );
  }
}

export default withContext(withTheme()(Payments));
