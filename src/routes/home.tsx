import React from 'react';
import Pokedex from '../components/home';
import SearchAppBar from '../components/navbar';

const Home = () => {
  return (
    <div>
        <SearchAppBar/>
        <Pokedex/>
    </div>
  )
}

export default Home