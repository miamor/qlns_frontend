import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
//import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import translations from './i18n';

import { EmployeeList, EmployeeCreate, EmployeeEdit, EmployeeDelete, EmployeeIcon } from './employees';
import { CustomerList, CustomerCreate, CustomerEdit, CustomerDelete, CustomerIcon } from './customers';

import restClient from './restClient';
//import fakeRestServer from './restServer';

class App extends Component {
    componentWillMount() {
        //this.restoreFetch = fakeRestServer();
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="Posters Galore Admin"
                restClient={restClient}
                customReducers={{ theme: themeReducer }}
                //customSagas={sagas}
                customRoutes={customRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
            <Resource name="employees" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} remove={EmployeeDelete} icon={EmployeeIcon} />
            <Resource name="customers" list={CustomerList} create={CustomerCreate} edit={CustomerEdit} remove={CustomerDelete} icon={CustomerIcon} />
            </Admin>
        );
    }
}

export default App;
