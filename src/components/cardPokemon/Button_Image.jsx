import { useState, useEffect, useRef } from 'react';
import './card_pokemon.css'

function ButtonImage({ onClick, activo }) {
    const btnClassName = activo ? 'btnImage btnImage-act' : 'btnImage';

    return (
        <button className={btnClassName} onClick={onClick}></button>
    );
}


export default ButtonImage