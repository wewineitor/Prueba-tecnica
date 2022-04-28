import getTypes from '../../helpers/getTypes'
import useModal from '../../hooks/useModal'
import styles from './Modal.module.css'

//Este metodo es para reemplazar algunos caracteres extraños que vienen en la api
const replace = (string) => string.replaceAll('', ' ').replaceAll('é', 'E')

const Modal = ({name, setOpen}) => {
    const [entrie, data, addFavorites] = useModal(name, setOpen)

    const colorTypes = getTypes()

    return (
        <>
            {
                data !== null ? 
                <div className={styles.container}>
                    <h1>{name}</h1>
                    {
                        data.types.map(type => <label className={styles.type} style={{ background: data === null ? null : colorTypes[type.type.name] }}>{type.type.name}</label>)
                    }
                    
                    <label>{entrie === null ? null : replace(entrie.flavor_text_entries[1].flavor_text)}</label>
                    <label>Height: {data.height}</label>
                    <label>Weight: {data.weight}</label>
                    <button onClick={() => {addFavorites()}}>Add favorite</button>
                    <button onClick={() => setOpen(false)}>Close</button>
                </div>
                :null
            }
        </>
    )
}

export default Modal