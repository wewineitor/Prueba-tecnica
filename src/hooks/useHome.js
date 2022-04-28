import { useState } from "react"
import usePokemon from "./usePokemon"

const useHome = () => {
    if(localStorage.getItem('favorites') === null) {
        localStorage.setItem('favorites', JSON.stringify([]))
    }

    const pokemon = usePokemon()
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            setSearch(value)
        }
    }

    return [pokemon, value, setValue, search, handleSubmit]
}

export default useHome