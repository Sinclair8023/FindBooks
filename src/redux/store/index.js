/**
 * Created by Sinclair on 2017/4/11.
 */
import {createStore,applyMiddleware} from 'redux';
//redux 异步中间件
import thunk from 'redux-thunk';
import reducers from '../reducers';
export default createStore(reducers,applyMiddleware(thunk));