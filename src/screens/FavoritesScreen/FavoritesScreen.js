import Card from "../../components/Card"
import styles from './FavoriteScreen.module.css'

const FavoritesScreen = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    return (
        <>
        {
            favorites.length === 0 ? <h1>No tienes favoritos en tu lista</h1>: 
            <div className={styles.container}>
                {
                    favorites.map(fav => (
                        <Card key={fav} name={fav}/>
                    ))
                }
            </div>
        }
        </>
    )
}

export default FavoritesScreen