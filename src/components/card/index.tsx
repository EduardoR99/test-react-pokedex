import React, { useState, useEffect } from 'react'
import { PokeDetails } from '../../interface/pokeInterface';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../services/pokeDetails'
import { Container, Typography, Box } from '@mui/material';
import * as C from './style';



function CardsDetails() {
    const [selectPokeData, setSelectPokeData] = useState<PokeDetails | undefined>(undefined);
    const { name } = useParams<string>()

    useEffect(() => {
        if (!name) return;

        getPokemonDetails(name).then((response) => setSelectPokeData(response))
        console.log(selectPokeData)
    }, [selectPokeData, name])
    return (
        <div>
            <C.cardBody>
                <Container>
                    <C.Container>
                        <C.Card>
                            <img width='200px' height='auto' src={selectPokeData?.sprites.front_default} alt='' />
                        </C.Card>
                        <C.Title>
                            {selectPokeData?.name}
                        </C.Title>
                        <C.CardLegend>
                            
                            
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h5'>
                                    Types:
                                </Typography>
                                <Typography variant='h5'>
                                    {selectPokeData?.types.map((type) => <p>{type.type.name}</p>)}
                                </Typography>
                            </Box>

                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h5'>
                                    Specie:
                                </Typography>
                                <Typography variant='h5'>
                                    {selectPokeData?.species.name}
                                </Typography>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h5'>
                                    Height:
                                </Typography>
                                <Typography variant='h5'>
                                    <p>  {selectPokeData?.height}</p>
                                </Typography>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h5'>
                                    Weight:
                                </Typography>
                                <Typography variant='h5'>
                                    <p>  {selectPokeData?.weight}</p>
                                </Typography>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h5'>
                                    Abiities:
                                </Typography>
                                <Typography variant='h5'>
                                    <p> {selectPokeData?.abilities.map(ability => <p>{ability.ability.name}</p>)} </p>
                                </Typography>
                            </Box>
                        </C.CardLegend>
                    </C.Container>
                </Container >
            </C.cardBody>

        </div>
    )
}

export default CardsDetails