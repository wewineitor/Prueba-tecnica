import { useState } from 'react'
import Card from '../../components/Card'
import usePokemon from "../../hooks/usePokemon"
import styles from './HomeScreen.module.css'

const HomeScreen = () => {

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

    return (
        <div>
            <input 
            placeholder='Search Pokemon' 
            className={styles.input}
            value={value}
            onChange = {(e) => setValue(e.target.value)}
            autoComplete="off"
            onKeyDown={handleSubmit}
            />
            
            <div className={styles.container}>
                {
                    search === '' ? 
                    pokemon !== null ? pokemon.map(poke => (<Card key={poke.name.trim().toLowerCase()} name={poke.name.trim().toLowerCase()} />)) : null
                    :
                    <Card name={search.trim().toLowerCase()} />
                }
                
            </div>
            
        </div>
    )
}

export default HomeScreen