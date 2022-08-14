import axios from "axios";
import { pokeListInterface } from "../interface/pokeInterface";
import { getPokemonDetails } from "./pokeDetails";

const pokeListUrl = `${process.env.REACT_APP_URl_ENDPOINT}?offset=0&limit=151`;

 
export async function pokeListsGet(): Promise<pokeListInterface>{
    const response = await axios.get<pokeListInterface>(pokeListUrl);
    
    const promiseArr =  response.data.results.map(({name}) => getPokemonDetails(name));

    const resultsPromise = await Promise.all(promiseArr)
    return{
        ...response.data,
        results: resultsPromise
    }
}