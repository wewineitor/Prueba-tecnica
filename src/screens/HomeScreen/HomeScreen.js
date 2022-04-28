import Card from '../../components/Card'
import useHome from '../../hooks/useHome'
import styles from './HomeScreen.module.css'

const HomeScreen = () => {
    const [pokemon, value, setValue, search, handleSubmit] = useHome()

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