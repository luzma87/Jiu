import * as React from 'react';
import MyContext from './MyContext';

export default class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wes',
      age: 10,
      cool: true,
    };
  }

  render() {
    const state = {
      state: this.state,
      growAYearOlder: () => this.setState({
        age: this.state.age + 1,
      }),
    };

    return (
      <MyContext.Provider value={state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
