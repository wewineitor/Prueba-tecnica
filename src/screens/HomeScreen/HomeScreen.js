import { useState } from 'react'
import Card from '../../components/Card'
import usePokemon from "../../hooks/usePokemon"
import styles from './HomeScreen.module.css'

const HomeScreen = () => {

    if(localStorage.getItem('favorites') === null) {
        localStorage.setItem('favorites', JSON.stringify([]))
    }

    const pokemon = usePokemon()
    const [search, setSearch] = useState('')


    return (
        <div>
            <input 
            placeholder='Search Pokemon' 
            className={styles.input}
            onChange = {(e) => setSearch(e.target.value)}
            autoComplete="off"
            />
            
            <div className={styles.container}>
                {
                    search === '' ? 
                    pokemon !== null ? pokemon.map(poke => (<Card key={poke.name} name={poke.name} />)) : null
                    :
                    <Card name={search.trim()} />
                }
                
            </div>
            
        </div>
    )
}

export default HomeScreen