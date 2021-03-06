import {Route,Router} from 'react-router';
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Provider} from 'react-redux';
import Index from './Containers/Index/Index';
import Login from './Containers/Login/Login';
import UserLogin from './Containers/UserLogin/UserLogin';
import UserIndex from './Containers/UserIndex/UserIndex';
import Edit from './Containers/Edit/Edit'
import configureStore from './redux/store'
let store = configureStore();// , 

export default class Navrouter extends Component {
    render() {
        return (
        
                <Provider store={store}>

                <ConnectedRouter  history={history}>                     
                                   <div>
                                        <Route path="/" exact component={UserLogin} />  
                                        <Route path="/UserIndex" component={UserIndex} />
                                        <Route path="/Edit" component={Edit} />  
                                        <Route exact path="/Admin" component={Login} />
                                        <Route path="/Index"  component={Index} />    
                                
                                    </div>                                           
                </ConnectedRouter >
                </Provider>
            
        )
    }
}