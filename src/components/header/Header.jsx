import styles from './header.module.css'
import Title from '../title/Title'

function Header() {
    return(
        <div className={styles.header}>
            <header>
            <Title text={"First lessons in ReactJS"} />
            </header>
   
        </div>
    )
}

export default Header
