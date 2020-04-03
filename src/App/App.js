/*eslint-disable*/
import React, {useEffect} from 'react';
import YTSearch from 'youtube-api-search';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {ROUTE} from "./route-config";

function App() {
    useEffect(() => {
        console.log('jest')
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
     <Router>
         <Switch>
             <Route to={ROUTE.HOME}>
                 <div>
                     testoawnie
                 </div>
             </Route>
         </Switch>
     </Router>
    );
}

export default App;
