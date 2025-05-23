import Card_pokemon from '../cardPokemon/Card_pokemon';
import { pokemonConn } from '../../service/api';
import { useEffect, useState } from 'react';

function ContentCard({start,end}) {
    const [pokemon , setPokemon] = useState([]) 

    useEffect(() =>{
        const getPokemons = async () =>{
            const request = []
            for (let i = start; i <= end; i++) {
                request.push(pokemonConn.get(`${i}/`))
            }

            try {
                const responses = await Promise.all(request);
                const pokemonData = responses.map(res => res.data);
                setPokemon(pokemonData);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        }

        getPokemons();
    }, []);

    
    return(
        <>
        <section className='Content_card_pokemon'>
            {pokemon.map((pokemon)=>(
                <Card_pokemon key={pokemon.id} type={pokemon.types[0].type.name} list={pokemon}/>
            ))}
        </section>
        </>
    )
}

export default ContentCard