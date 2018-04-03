import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from '../reducers/index';
import IStoreState from './IStoreState';

export default function configureStore() {
  return createStore<IStoreState>(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}

// export default {
//     locations: [
//         {name: 'Chicago', country: 'USA', count: 72},
//         {name: 'NY', country: 'USA', count: 36},
//         {name: 'LA', country: 'USA', count: 12},
//     ],
//     users: [
//         {user: 'Chaira', category: 'Faces', count: 19},
//         {user: 'John', category: 'Faces', count: 10}
//     ]
// }
