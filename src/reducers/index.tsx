import { combineReducers } from 'redux';
import { actions, ActionType } from '../actions';
import initialState from '../store/initialState';
import IStoreState from '../store/IStoreState';

function suggestionsReducer(state: object = initialState.suggestions, action: ActionType) {
  switch (action.type) {
    case actions.SEARCH_LOADING:
      return {...state, loading: true};
    case actions.SEARCH_LOADING_SUCCESS:
      return {...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case actions.SEARCH_LOADING_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers<IStoreState>({
  suggestions: suggestionsReducer
});

export default rootReducer;
