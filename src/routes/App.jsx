import React from 'react';
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";


import Home from "../Containers/Home";
import Checkout from "../Containers/Checkout";
import Information from "../Containers/Information";
import Payment from "../Containers/Payment";
import Success from "../Containers/Sucess";
import NotFound from "../Containers/NotFound";
import Layout from "../components/Layout";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";

const Apps = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/checkout/information" component={Information}/>
                        <Route exact path="/checkout/payment" component={Payment}/>
                        <Route exact path="/checkout/success" component={Success}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default Apps;
