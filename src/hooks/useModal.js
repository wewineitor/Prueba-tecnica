import useData from "./useData"
import useEntrie from "./useEntrie"

const useModal = (name, setOpen) => {
    const entrie = useEntrie(name)
    const data = useData(name)
    const favorites = JSON.parse(localStorage.getItem('favorites'))

    const addFavorites = () => {
        setOpen(false)
        const array = []
        if(!favorites.includes(name)){
            array.push(...favorites, name)
            localStorage.setItem('favorites', JSON.stringify(array))
        } 
    }

    return [entrie, data, addFavorites]
}

export default useModal