import './content_type.css'
import ContentCard from '../contentPokemonCard/Cnt_card_pokemon'
import { pokemonConn } from '../../service/api'
import { useEffect, useState } from 'react'

export function Card_type({type, id}) {
    const classType = `card_type ${type}`
    
    const getPokemons = async () =>{
        const request = []
        for (let i = 1; i <= 151; i++) {
            request.push(pokemonConn.get(`${i}/`))
        }

        try {
            const responses = await Promise.all(request);
            const pokemonData = responses.map(res => res.data);
            
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }

    return(
        <>
        <span className={classType} onClick={getPokemons}>
            {type}
        </span>
        </>
    )
}

function Content_type() {
    return(
        <>
        <section className="content_card_type">
            <Card_type type={'normal'} id={'normal'}/>
            <Card_type type={'grass'} id={'grass'}/>
            <Card_type type={'fire'} id={'fire'}/>
            <Card_type type={'water'} id={'water'}/>
            <Card_type type={'electric'} id={'electric'}/>
            <Card_type type={'ice'} id={'ice'}/>
            <Card_type type={'fighting'} id={'fight'}/>
            <Card_type type={'poison'} id={'poison'}/>
            <Card_type type={'ground'} id={'ground'}/>
            <Card_type type={'flying'} id={'fly'}/>
            <Card_type type={'bug'} id={'bug'}/>
            <Card_type type={'rock'} id={'rock'}/>
            <Card_type type={'ghost'} id={'ghost'}/>
            <Card_type type={'steel'} id={'steel'}/>
            <Card_type type={'fairy'} id={'fairy'}/>
            <Card_type type={'dragon'} id={'dragon'}/>
            <Card_type type={'psychic'} id={'psychic'}/>
            <Card_type type={'dark'} id={'dark'}/>
        </section>
        </>
    )
}

export default Content_type