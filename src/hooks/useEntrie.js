import { useEffect, useState } from "react"

function useEntrie (name) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async() => {
            const url = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
            const response = await url.json();
            setData(response);
        }
        getData();
        
    }, [name])
    return data;
}

export default useEntrie