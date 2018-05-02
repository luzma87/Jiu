import * as React from 'react';

export namespace ReactRedux {

  export class Component<ReduxPropsType, OwnProps> extends React.Component <any, any> {

    props!: Readonly<{children?, dispatch?}>

    getProps() : Readonly<ReduxPropsType> & Readonly<OwnProps> {
      return this.props as Readonly<ReduxPropsType> & Readonly<OwnProps>
    }
  }
}
