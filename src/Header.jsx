// Header.jsx
import Pokeball from "./assets/Pokeball";
import Arrow from "./assets/Arrow";
import { Link } from "react-router-dom";
import { Formulario } from "./Formulario";
import { useState } from "react";

function Header() {
  const [regiones, mostrarRegiones] = useState(false);
  const toogleRegiones = () => mostrarRegiones(!regiones);

  return (
    <header className="headerPage">
      <Link Link to="/">
      <span className="ctnPrincipal">
        <Pokeball />
        <h1 className="Titulo">Pokedex</h1>
      </span>
      </Link>
      <nav>
        <ul className="listNav">
          <li className="itemListNav">
            <span className="contentItemListNav" onClick={toogleRegiones}>
              Regiones <Arrow />
            </span>
            {regiones && (
              <ul className="listRegiones">
                <Link to="/"><li className="itemListRegiones">Kanto</li></Link>
                <Link to="/johto"><li className="itemListRegiones">Johto</li></Link>
                <Link to="/sinnoh"><li className="itemListRegiones">Sinnoh</li></Link>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <Formulario />
    </header>
  );
}

export default Header;
