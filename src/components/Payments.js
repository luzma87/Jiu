import React from 'react';
import {withTheme} from "@material-ui/core/styles/index";
import {withContext} from "../context/WithContext";
import FormTitle from './fields/FormTitle';
import Select from './fields/Select';
import Button from '@material-ui/core/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      month: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  onGenerateClick() {}

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
            onClick={this.onGenerateClick}
            variant="contained"
            color="primary"
          >
            <FontAwesomeIcon
              icon={['far', 'money-bill-alt']}
              size="lg"
              style={{ marginRight: 15 }}
            />
            Generar
          </Button>
        </div>
      </div>
    )
  }
}

export default withContext(withTheme()(Payments));
