import React from 'react';
import { Link } from 'react-router-dom';
import allBeers from '../../';

export default function Home() {
  return (
    <>
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </>
  );
}
