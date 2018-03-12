import {applyMiddleware,createStore,combineReducers} from 'redux';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import history from '../history'
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(history)
export default function configureStore(){
    const store = createStore(combineReducers({reducers,router: routerReducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware, middleware))
    //,
    sagaMiddleware.run(sagas);
    return store ;
}