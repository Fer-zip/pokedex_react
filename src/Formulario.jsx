import { useState } from 'react';
import { pokemonConn } from './service/api';
import { usePokemon } from './context/PokemonContext'; // 👈
import { useNavigate } from 'react-router-dom'; // 👈

export function Formulario() {
    const [formData, setFormData] = useState({ nombre: '' });
    const { setPokemon } = usePokemon(); // 👈
    const navigate = useNavigate(); // 👈

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nombre.trim()) return;

        try {
            const response = await pokemonConn.get(`${formData.nombre.toLowerCase()}/`);
            setPokemon(response.data); // 👈 guarda en contexto
            navigate('/busqueda'); // 👈 redirige a la ruta
        } catch (error) {
            console.error("Pokémon no encontrado:", error);
            setPokemon(null);
        }
    };

    return (
        <form className="formBuscador" id="formBuscador" onSubmit={handleSubmit}>
            <input
                className="inputBuscador"
                type="text"
                name="nombre"
                placeholder="Busca tu Pokémon"
                value={formData.nombre}
                onChange={handleChange}
            />
            <input className="submitBuscador" type="submit" value="Buscar" />
        </form>
    );
}
