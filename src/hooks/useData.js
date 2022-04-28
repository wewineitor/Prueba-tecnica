import { useEffect, useState } from "react"

const useData = (name) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async() => {
            try {
                const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const response = await url.json();
                setData(response);
            } catch (error) {
                console.log(error)
                setData(undefined)
            }
        }
        getData();
        
    }, [name])
    return data;
}

export default useData