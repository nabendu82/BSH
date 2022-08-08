import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import countReducer from './ducks/count'
import userReducer from './ducks/user'
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    counter: countReducer,
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

export default store;