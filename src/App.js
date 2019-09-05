import React, {Component, Suspense} from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./Home/Home'));
const Courses = React.lazy(() => import('./Courses/Courses'));
const Users = React.lazy(() => import('./Users/Users'));
const Rules = React.lazy(() => import('./Rules/Rules'));
const NotFound = React.lazy(() => import('./NotFound/NotFound'));

class App extends Component {

  render(){
    return (
      <BrowserRouter>

        <div className="container">
          <nav className="navbar navbar-default" style={{marginTop:'15px'}}>
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/" exact>Home</NavLink></li>
                  <li><NavLink to="/users">Users</NavLink></li>
                  <li><NavLink to="/courses">Courses</NavLink></li>
                  <li><NavLink to="/rules">Rules</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>

          
          <Switch>
            <Route path="/" exact render={() => (
              <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>
            )} />
            <Route path="/users" exact render={() => (
              <Suspense fallback={<div>Loading...</div>}><Users /></Suspense>
            )} />
            <Route path="/courses" render={() => (
              <Suspense fallback={<div>Loading...</div>}><Courses /></Suspense>
            )} />
            <Route path="/rules" render={() => (
              <Suspense fallback={<div>Loading...</div>}><Rules /></Suspense>
            )} />
            <Route path="*" exact render={() => (
              <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>
            )} />
          </Switch>
          
        </div>

      </BrowserRouter>
    );
  }
  
}

export default App;
