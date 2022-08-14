import React from 'react'
import * as C from './style';
import { PokeDetails } from '../../interface/pokeInterface'
import {  Link } from 'react-router-dom'

interface CardProps{
    pokemon: PokeDetails;
}

export const PokeCards:React.FC<CardProps> =({ pokemon }) => {
  return (
    <div>
       <Link style={{color: '#f00', textDecoration: 'none'}} to={`/pokemon/${pokemon.name}`}>
        <C.Card >
          <img width='100px' src={pokemon.sprites.front_default} alt="" />
                <p>{pokemon.name}</p>
                <C.Parag>
                  {pokemon.types.map((type, index)=> <p key={index} style={{margin: '5px'}}>{type.type.name}</p> )}
                </C.Parag>
                
        </C.Card>
        </Link>
    </div>
  )
}

export default PokeCards