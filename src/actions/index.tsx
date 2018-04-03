import { Dispatch } from 'react-redux';
import call from '../http/index';
import IStoreState from '../store/IStoreState';

export interface ActionType {
  readonly type: string,
  readonly payload: any,
}

export const actions = {
  SEARCH_LOADING: 'SEARCH_LOADING',
  SEARCH_LOADING_SUCCESS: 'SEARCH_LOADING_SUCCESS',
  SEARCH_LOADING_ERROR: 'SEARCH_LOADING_ERROR'
};

export const search = (query: string) => async(dispatch: Dispatch<IStoreState>) => {
  dispatch({type: actions.SEARCH_LOADING});
  try {
    const result = await call('/?query=' + query);
    dispatch({
      type: actions.SEARCH_LOADING_SUCCESS,
      payload: result
    })
  } catch (e) {
    dispatch({
      type: actions.SEARCH_LOADING_ERROR,
      payload: e
    })
  }
};
