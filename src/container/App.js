import React, { Component } from 'react';
import 'styles/index.scss';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { axiosAuthMiddleware } from 'middleware/axios-middleware';
import reducers from 'redux/reducers'
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from 'container/MainLayout';

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk,
    logger,
    // axiosAuthMiddleware
  )(createStore);
  
  const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );;

class App extends Component {
    render() {
        return (
            // <div>
                // Hello Information
            // </div>
            <Provider store={store}>
				<Router>
                    <Route path={'/'} component={MainLayout} />                
                </Router>

            </Provider>
        );
    }
}

export default App;
