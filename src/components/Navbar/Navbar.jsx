import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <label className={styles.show_menu} htmlFor="menu"><img src="icons/menu.png" alt="menu-icon"/></label>
            <input type="checkbox" id="menu" className={styles.menu_input}/>
                <nav className="menu">
                    <ul>
                        <li><Link to= "/">Home</Link></li>
                        <li><Link to= "/Favorites">Favorites</Link></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navbar