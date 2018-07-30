import React from 'react';
import { withTheme } from '@material-ui/core/styles/index';
import { withContext } from '../context/WithContext';
import FormTitle from './fields/FormTitle';
import Select from './fields/Select';
import Button from '@material-ui/core/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import paymentClient from '../rest/PaymentClient';

class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      month: '',
      payments: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  onGenerateClick() {
    this.setState({ payments: [] });
    const { year, month } = this.state;
    const params = { year, month };
    paymentClient.createForMonth(params).then((response) => {
      this.setState({ payments: response.data.result.result });
    });
  }

  render() {
    const { context } = this.props;
    return (
      <div className="container gridContainer">
        <FormTitle label="Pagos" />
        <Select
          label="Año"
          id="year"
          value={this.state.year}
          options={context.years}
          onChange={this.onChange}
        />
        <Select
          label="Mes"
          id="month"
          value={this.state.month}
          options={context.months}
          onChange={this.onChange}
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
        <div>
          <table>
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Forma de pago</th>
                <th>Plan</th>
                <th>Monto debe</th>
                <th>Monto pagado</th>
                <th>Fecha pago</th>
              </tr>
            </thead>
            <tbody>
              {this.state.payments.map(payment => {
                return (
                  <tr>
                    <td>
                      {payment.student.firstName} {payment.student.lastName}
                    </td>
                    <td>{payment.methodOfPayment.description}</td>
                    <td>{payment.plan.description}</td>
                    <td>{payment.amountDue}</td>
                    <td>{payment.amountPayed}</td>
                    <td>{payment.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withContext(withTheme()(Payments));
