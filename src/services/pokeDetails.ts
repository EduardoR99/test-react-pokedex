import axios from 'axios';
import {PokeDetails,} from '../interface/pokeInterface';



export const getPokemonDetails = async (name: string) => {
    const pokeListUrl = `${process.env.REACT_APP_URl_ENDPOINT}${name}`;

    const response = await axios.get<PokeDetails>(pokeListUrl);

    return response.data;
}