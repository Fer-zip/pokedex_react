import { useState, useEffect, useRef } from 'react';
import Modal_card_pokemon from './modal_card_pokemon';
import './card_pokemon.css'

function Card_pokemon({type, list}){

    const [showDetails, setShowDetails] = useState(false);

    const idPokemon = list.id   
    const PokemonType = `pokemon ${type}`
    const nombrePokemon = list.name

    function calcularComas(calcular, tipo) {
        if (calcular == 'height') {
            let lista = list.height.toString();
            let procesada = "";
            if (lista.length === 1) {
                procesada = `0,${lista} ${tipo}`;
            } else {
                const parteEntera = lista.slice(0, -1); // todo menos el último dígito
                const decimal = lista.slice(-1);        // último dígito
                procesada = `${parteEntera},${decimal} ${tipo}`;
            }

            return procesada
        }else{
            let lista = list.weight.toString();
            let procesada = "";
            if (lista.length === 1) {
                procesada = `0,${lista} ${tipo}`;
            } else {
                const parteEntera = lista.slice(0, -1); // todo menos el último dígito
                const decimal = lista.slice(-1);        // último dígito
                procesada = `${parteEntera},${decimal} ${tipo}`;
            }
            return procesada
        }
    }
    
    const alturaPokemon = calcularComas('height' , 'm')
    const pesoPokemon = calcularComas('weight' , 'kg')
    const habilidadesPokemon = list.abilities.map(habilidad => habilidad.ability.name)
    const listEstadisticasPokemon = list.stats.map(stat => stat.stat.name)
    const cantidadEstadisticasPokemon = list.stats.map(stat => stat.base_stat)
    const listaTiposPokemon = list.types.map(type => type.type.name)
    const image = list.sprites.other.home.front_default
    const imageShiny = list.sprites.other.home.front_shiny


    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
    <>
    <div className={`${PokemonType}_modal`} onClick={toggleDetails}>
        <div className='ctnImagePokemon'>
            <img 
            src={image} 
            alt={`imagen_${nombrePokemon}`}>
            </img>
        </div>
        <div className='CtnDatos'>
            <span className="datos">
                <p className='data_number'># {idPokemon}</p>
                <p className='data_name'>{nombrePokemon}</p>
            </span>
        </div>
    </div>

    {showDetails && 
        <Modal_card_pokemon type={type} showDetails={showDetails} setShowDetails={setShowDetails} image={image} imageShiny={imageShiny} nombrePokemon={nombrePokemon} listaTiposPokemon={listaTiposPokemon} alturaPokemon={alturaPokemon} pesoPokemon={pesoPokemon} habilidadesPokemon={habilidadesPokemon} listEstadisticasPokemon={listEstadisticasPokemon} cantidadEstadisticasPokemon={cantidadEstadisticasPokemon} />
    }
    </>
    )
}

export default Card_pokemon