import {Link } from 'react-router-dom'

    function Menu() {
    return(
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
           
            <li>
                <Link to="/About">About</Link>
            </li>

            <li>
                <Link to="/Portfolio">Portfolio</Link>
            </li>

            <li>
                <Link to="/FavoriteMovies">FavoriteMovies</Link>
            </li>

            <li>
                <Link to="/Contact">Contact</Link>
            </li>

        </ul>
        </>
    )
}

export default Menu