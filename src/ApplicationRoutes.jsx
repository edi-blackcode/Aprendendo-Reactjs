import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import FavoriteMovies from './pages/favoriteMovies/FavoriteMovies'
import Menu from './Menu'


function ApplicationRoutes(){
    return(
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path= '/' element= {<Home />} />
        <Route path= 'About' element= {<About />} />
        <Route path= 'Contact' element= {<Contact />} />
        <Route path= 'Portfolio' element= {<Portfolio />} />
        <Route path= 'FavoriteMovies' element= {<FavoriteMovies />} />
        </Routes>
       </BrowserRouter>
    )
}

export default ApplicationRoutes