import {Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './menu.module.css'
//import { List } from 'phosphor-react'


    function Menu() {
        const [open, setOpen] = useState(false)

        function handleMenu() {
            open ? setOpen(false) : setOpen(true)
        }
      /*<List size={32} isOpen={open} onClick={handleMenu} className={styles.hamburguer} />*/
    return(
                <nav>
              
        <ul className={open ? styles.hamburguerOpen : styles.menu}>
            <li className={open ? styles.itemOpen : styles.item}>
                <Link className={open ? styles.linkOpen : styles.link} to="/">Home</Link>
            </li>
           
            <li className={open ? styles.itemOpen : styles.item}>
                <Link className={open ? styles.linkOpen : styles.link} to="/About">About</Link>
            </li>

            <li className={open ? styles.itemOpen : styles.item}>
                <Link className={open ? styles.linkOpen : styles.link} to="/Portfolio">Portfolio</Link>
            </li>

            <li className={open ? styles.itemOpen : styles.item}>
                <Link className={open ? styles.linkOpen : styles.link} to="/FavoriteMovies">Favorite Movies</Link>
            </li>

            <li className={open ? styles.itemOpen : styles.item}>
                <Link className={open ? styles.linkOpen : styles.link} to="/Comentarios">Comentários</Link>
            </li>

            <li className={open ? styles.itemOpen : styles.item}>
                <Link className={open ? styles.linkOpen : styles.link} to="/Contact">Contact</Link>
            </li>

        </ul>
        </nav>
    )
}

export default Menu