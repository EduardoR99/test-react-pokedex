import React, { useState, useEffect } from 'react';
import { pokeListsGet } from '../../services/pokeList';
import { PokeDetails } from '../../interface/pokeInterface';
import { Container, Box, Grid } from '@mui/material';
import PokeCards from '../pokeCards';
import Charts from '../charts';





function Pokedex() {
    const [pokemons, setPokemons] = useState<PokeDetails[]>([]);
    const [pokemonsFiltered, setPokemonsFilteres ] = useState('')
    

    useEffect(() => {
        pokeListsGet().then((response) => setPokemons(response.results))
    }, []);

    console.log(pokemonsFiltered)
    const filterdPokemons = pokemons.filter((pokemon) => pokemon.name.includes(pokemonsFiltered.toLowerCase()))
    return (
        <div>
            <Container maxWidth="md">
                <input  
                style={{width:'100%', outline: 'none', borderRadius: '5px', border:'none', padding:'1rem', marginTop:'2rem', backgroundColor: '#f00', color: '#fff'}} 
                type="text" 
                value={pokemonsFiltered}
                onChange={(e) => setPokemonsFilteres(e.target.value)}
                />
                
                <Box m={3}>   
                    <Charts />
                    <Grid container spacing={2}>
                        {filterdPokemons.map((pokemon, index) => (

                            <Grid item xs={6} lg={3}>
                                <PokeCards key={index} pokemon={pokemon}/>
                            </Grid>

                        ))}


                    </Grid>
                </Box>
            </Container>


        </div>
    )
}

export default Pokedex