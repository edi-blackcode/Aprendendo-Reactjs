import styles from './favoriteMovies.module.css'
import movies from './datas'


const FavoriteMovies = () =>{
    return(
        <>
        <h1>Favorite Movies: </h1>
        <div>
          <p>Abaixo estão elencados os meus filmes preferidos. Todos com o devido protagonismo preto.</p>
        </div>
       
        <div>
            {movies.map(movie => 
                <div>
                    <h1 key={movie.id}>
                        {movie.name}
                    </h1>
                    <p>
                        {movie.gender}
                    </p>
                    <div className={styles.favoriteMovies}>
                    <img alt={movie.name} src={movie.poster}/>
                    </div>
                </div>
            )
            }
        </div>
        </>
        
    )
}

export default FavoriteMovies