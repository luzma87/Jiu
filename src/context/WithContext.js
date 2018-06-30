import GlobalContext from '../context/MyContext';
import React from 'react';

export function withContext(Component) {
  return function ConnectedComponent(props) {
    return (
      <GlobalContext.Consumer>
        {context => <Component {...props} context={context.state} />}
      </GlobalContext.Consumer>
    );
  };
}
