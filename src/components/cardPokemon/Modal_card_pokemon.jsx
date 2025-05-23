import { useState, useEffect, useRef } from 'react';
import ButtonImage from './Button_Image';
import './card_pokemon.css'


function Modal_card_pokemon({type,showDetails,setShowDetails, image,imageShiny,nombrePokemon,listaTiposPokemon,alturaPokemon,pesoPokemon,habilidadesPokemon,listEstadisticasPokemon,cantidadEstadisticasPokemon}) {

    const [currentImage, setCurrentImage] = useState(image);
    const [activeImage, setActiveImage] = useState('normal'); // 'normal' o 'shiny'

    const showDefaultImage = () => {
        setCurrentImage(image);
        setActiveImage('normal');
    };

    const showShinyImage = () => {
        setCurrentImage(imageShiny);
        setActiveImage('shiny');
    };

    const detailsRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (detailsRef.current && !detailsRef.current.contains(event.target)) {
                setShowDetails(false);
            }
        };

        if (showDetails) {document.addEventListener('mousedown', handleClickOutside);}
        return () => { document.removeEventListener('mousedown', handleClickOutside);};
    }, [showDetails]);

    return(
        <>
        <div className={`pokemonDetails ${type}_modal`} ref={detailsRef}>
            <button className="closeButton" onClick={() => setShowDetails(false)}>Cerrar</button>
            <section className="cntImgModal">
                <img src={currentImage} alt={nombrePokemon} />
                <div className="ctnButtons">
                    <ButtonImage onClick={showDefaultImage} activo={activeImage === 'normal'} />
                    <ButtonImage onClick={showShinyImage} activo={activeImage === 'shiny'} />
                </div>
            </section>
            <section className='details'>
                <div className='ctnStats'>
                    <span className='typeDetails'>
                    <p>Nombre:</p>
                    <p>{nombrePokemon}</p>
                    </span>
                    <span className='typeDetails'>Tipos:
                        <span className='types'>
                            {listaTiposPokemon.map((el,index)=>(
                                <p key={index} className={`unique ${el}`}>{el}</p>
                            ))}
                        </span>
                    </span>
                    <span className='typeDetails'>
                        <p>Altura:</p>
                        <p id='altura'>{alturaPokemon}</p>
                    </span>
                    <span className='typeDetails'>
                        <p>Peso:</p>
                        <p>{pesoPokemon}</p>
                    </span>
                    <span className='typeDetails'>
                        <p>Habilidades:</p>
                        <p>{habilidadesPokemon.join(', ')}</p>
                    </span>
                </div>
                <div className='ctnStats'>
                    <p>Estadísticas: </p>
                    {listEstadisticasPokemon.map((stat, index) => (
                        <span className='typeDetails' key={stat}>
                            <p>{stat}</p>
                            <p>{cantidadEstadisticasPokemon[index]}</p>
                        </span>
                    ))}
                </div>
            </section>
        </div>
        </>
    )
}

export default Modal_card_pokemon;