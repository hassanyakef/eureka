import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export const configureStore = () => {
  const initialState = {};
  const middleware = [thunk];
  return createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));
};