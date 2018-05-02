import * as React from 'react';

export namespace App {
  export interface Props {}
  export interface State {}
}

export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <div>
       Hello
      </div>
    );
  }
}
