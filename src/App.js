import React from 'react';
import {Route,Switch} from 'react-router-dom'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Inventory from './features/inventory'
import Pos from './features/pos'

import Dashboard from './features/Dashboard';
import NavBar from './app/components/navbar/NavBar'
import Category from './features/inventory/category/Category'



function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        {/* <Route exact to="/" component={Dashboard} /> */}
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/pos" component={Pos} />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/inventory/category/:id' component={Category} />
      </Switch>

      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
