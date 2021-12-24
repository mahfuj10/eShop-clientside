import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TelevisionRoute from '../TelevisionRoute/TelevisionRoute';

const CategoryRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Television">
                    <TelevisionRoute />
                </Route>
                <Route path="/Air Condition">
                    <h1>Air</h1>
                </Route>
                <Route path="/Shoes"></Route>
                <Route path="/LED lamp"></Route>
                <Route path="/Clothes"></Route>
                <Route path="/Smart Phone"></Route>
                <Route path="/Laptops"></Route>
                <Route path="/Fredge"></Route>
                <Route path="/Watch"></Route>
                <Route path="/Micro Oven"></Route>
                <Route path="/Washin Machine"></Route>
                <Route path="/Bags"></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default CategoryRoute;