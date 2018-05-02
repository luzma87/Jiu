
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { appReducer } from './appReducer';
import { AppState } from './AppState';

export function configureStore(initialState: AppState) {
  let middleware = applyMiddleware(thunk);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(appReducer, initialState, middleware) as Store<AppState>;

  if (module.hot) {
    module.hot.accept('./appReducer', () => {
      const nextReducer = require('./appReducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
