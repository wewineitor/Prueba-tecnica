import { useEffect, useState } from "react"

const usePokemon = () => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const getPokemon = async() => {
            const url = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
            const response = await url.json();
            setPokemon(response.results);
        }
        getPokemon();
    }, [])
    return pokemon;
}

export default usePokemon