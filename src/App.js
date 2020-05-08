import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ListBeersPage from './components/ListBeers/ListBeersPage';
import Random from './components/Random Beer/Random';
import NewBeer from './components/NewBeer/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={ListBeersPage} />
        <Route exact path="/random-beer" component={Random} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;

// /beers
// /random-beer
// /new-beer
