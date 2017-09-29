import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

//composeWithDevTools() helps load redux dev tools on Chrome
export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(),
    applyMiddleware(thunk,reduxImmutableStateInvariant())
  );
}
