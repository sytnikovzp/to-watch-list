import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log('Action is working', action);
//       next(action);
//     };
//   };
// }

export default createStore(rootReducer, applyMiddleware(logger));
