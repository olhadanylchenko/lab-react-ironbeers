import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../../img/beers.png';
import newBeer from '../../img/new-beer.png';
import random from '../../img/random-beer.png';

export default function HomePage() {
  return (
    <>
      <Link to="/beers">
        <img src={beers} alt="" />
        <p> All Beers</p>
      </Link>

      <Link to="/random-beer">
        <img src={random} alt="" />
        <p> Random Beer</p>
      </Link>

      <Link to="/new-beer">
        <img src={newBeer} alt="" />
        <p> New Beer</p>
      </Link>
    </>
  );
}
