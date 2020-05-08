import {applyMiddleware, combineReducers, createStore} from "redux";
import mainStore from '../screens/Main/main-reducer'
import loginStore from '../screens/Login/login-reducer'
import thunk from 'redux-thunk';

export default () => (createStore(
        combineReducers({
                mainStore,
                loginStore
            }
        ),
        applyMiddleware(thunk)
    )
);