import Card_pokemon from '../../components/cardPokemon/Card_pokemon'
import './main.css'
import { usePokemon } from '../../context/PokemonContext'; // 👈

function MainBusquedas() {
  const { pokemon } = usePokemon(); // 👈

  if (!pokemon) return <p>No se ha buscado ningún Pokémon.</p>;

  return (
    <>
      <section className='Content_card_pokemon'>
        <Card_pokemon 
          type={pokemon.types[0].type.name}
          list={pokemon}
        />
      </section>
    </>
  );
}

export default MainBusquedas;
