/*eslint-disable*/
import React, {useEffect} from 'react';
import YTSearch from 'youtube-api-search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ROUTE} from "./route-config";
import Main from "../screens/Main/Main";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import {Provider} from "react-redux";
import configureStore from "../store/configureStore";

function App() {
    const store = configureStore();

    useEffect(() => {
        YTSearch({key: 'AIzaSyDTsR00_je4d0VoBRuJSnL08e8AJjH9xa8'}, (data) => {
            console.log(data)
            try {
                if (data && data.data && data.data.error.message) {
                    console.log('data', data);
                }
            } catch (err) {
                alert(err)
            }

        });
    }, []);


    return (
        <Provider store={store}>
            <Router>
                <ul>
                    <li>
                        <Link to={ROUTE.HOME}>Wideo</Link>
                    </li>
                    <li>
                        <Link to={ROUTE.LOGIN}>Logowanie</Link>
                    </li>
                    <li>
                        <Link to={ROUTE.REGISTER}>Rejestracja</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={ROUTE.HOME}>
                        <Main/>
                    </Route>
                    <Route path={ROUTE.LOGIN}>
                        <Login/>
                    </Route>
                    <Route path={ROUTE.REGISTER}>
                        <Register/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
