import React from 'react';
import { withTheme } from '@material-ui/core/styles/index';
import { withContext } from '../context/WithContext';
import FormTitle from './fields/FormTitle';
import Select from './fields/Select';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import paymentClient from '../rest/PaymentClient';
import constants from '../util/constants';
import PaymentsTable from './paymentsTable/PaymentsTable';

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

const renderPaymentsTable = (payments) => {
  return <PaymentsTable payments={payments} />;
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
    };
    paymentClient.getAllForMonth({ year: currentYear, month: currentMonth })
      .then((response) => {
        this.setState({ payments: response.data });
      });
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      payments: [],
      [name]: target.value,
    }, () => {
      const { year, month } = this.state;
      paymentClient.getAllForMonth({ year, month })
        .then((response) => {
          this.setState({ payments: response.data });
        });
    });
  }

  onGenerateClick() {
    this.setState({ payments: [] });
    const { year, month } = this.state;
    paymentClient.createForMonth({ year, month }).then((response) => {
      this.setState({ payments: response.data.result.result });
    });
  }

  render() {
    const { context } = this.props;
    const { payments } = this.state;
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
            <Button
              onClick={() => this.onGenerateClick()}
              variant="contained"
              color="primary"
            >
              <FontAwesomeIcon
                icon={['far', 'money-bill-alt']}
                size="lg"
                style={{ marginRight: 15 }}
              />
              Generar / Ver
            </Button>
          </div>
        </div>
        <div className="container">
          {payments.length === 0 ? renderNoPayments() : renderPaymentsTable(payments)}
        </div>
      </div>
    );
  }
}

export default withContext(withTheme()(Payments));
