import {applyMiddleware, combineReducers, createStore} from "redux";
import mainStore from '../reducers/main-reducer'
import thunk from 'redux-thunk';

export default () => (createStore(
        combineReducers({
                mainStore,
            }
        ),
        applyMiddleware(thunk)
    )
);