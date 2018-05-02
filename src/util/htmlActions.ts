import {createActionThunk} from 'redux-thunk-actions';
import 'whatwg-fetch';

export const get = (url) => fetch(url).then((response) => response.json());

export interface HtmlActions {
  started: string;
  succeeded: string;
  failed: string;
  ended: string;
  getAction;
};

export function createHtmlGetAction<T> (actionName: string, url: string) : HtmlActions {
  return {
    started: `${actionName}_STARTED`,
    succeeded: `${actionName}_SUCCEEDED`,
    failed: `${actionName}_FAILED`,
    ended: `${actionName}_ENDED`,
    getAction: createActionThunk(actionName, () => get(url))
  }
}
