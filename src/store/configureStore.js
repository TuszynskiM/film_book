import {combineReducers, createStore} from "redux";
import mainReducer from '../reducers/main-reducer'

export default () => {
    const store = createStore(
        combineReducers(
            mainReducer,
        ),
    )
}