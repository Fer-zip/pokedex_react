import axios from 'axios'

const pokemonConn = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

const objetosConn = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/item/',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

const evosConn = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/evolution-chain/',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export {pokemonConn, objetosConn, evosConn};