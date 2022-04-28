import { useState } from "react"
import getTypes from "../../helpers/getTypes"
import useData from "../../hooks/useData"
import Modal from "../Modal/Modal"
import styles from './Card.module.css'

const Card = ({ name }) => {
    const data = useData(name)
    const [open, setOpen] = useState(false)
    const types = getTypes();

    return (
        <>
            {
                data === undefined ? <h1>This pokemon doesn't exists</h1> :
                    <div className={styles.container} style={{ background: data == null ? null : types[data.types[0].type.name] }}>
                        <img src={data !== null ? data.sprites.front_default : null} alt={name} loading = 'lazy'/>
                        <p>{name}</p>
                        <button onClick={() => setOpen(true)}>More info...</button>
                        {
                            open ? <Modal name={name} setOpen={setOpen} /> : null
                        }
                    </div>
            }
        </>
    )
}

export default Card