import React from 'react'
import './css/SearchResultCard.css'
import imdb from '../../assets/imdb.png'
import tomato from '../../assets/tomato.png'
import splat from '../../assets/splat.png'

export default function SearchResultCard(props) {
    const { movie, nominateMovie, nominated } = props

    let buttonText
    let status = nominated.find(m => movie.imdbID === m.imdbID) ? true : false
    status === false ? buttonText = "Nominate" : buttonText = <i className="fas fa-award fa-5x" />  
    
    let genre
    let genres = movie.Genre
    if (genres) {
        genres = movie.Genre.split(",")
        genre = genres.map(
            genre => <span className="movie-genre">{genre.trim()}</span>
        )
    }

    let ratings = []
    movie.Ratings.map(rating => {
        if (rating.Source === 'Internet Movie Database') {
            ratings.push(<span className="rating-type"> <img className="rating-icons" src={imdb} /> {rating.Value} </span>)
        }
        if (rating.Source === 'Rotten Tomatoes') {
            let percentage = rating.Value.substring(0, rating.Value.length - 1)
            if (percentage < '60') {
                ratings.push(<span className="rating-type"><img className="rating-icons"src={splat}/> {rating.Value} </span>)
            } else {
                ratings.push(<span className="rating-type"><img className="rating-icons"src={tomato}/> {rating.Value} </span>)
            }
        }
        if (rating.Source === 'Metacritic') {
            let metascore = parseInt(rating.Value.split('/')[0])
            if (metascore > 60) {
                ratings.push(<span className="rating-type"><span className="metacritic metascore-green">{metascore}</span> Metascore</span>)
            } 
            else if (39 < metascore && metascore < 61) {
                ratings.push(<span className="rating-type"><span className="metacritic metascore-yellow">{metascore}</span> Metascore</span>)
            }
            else if (metascore < 40) {
                ratings.push(<span className="rating-type"><span className="metacritic metascore-red">{metascore}</span> Metascore</span>)
            }
        }
    })

    console.log(ratings)
    return (
        <div className="search-result-card">        
            <div className="card-content">
                <div className="card-content--items">
                    <div className="container-img">
                        <img className="movie-img" src={movie.Poster} />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">
                            {movie.Title} ({movie.Year})
                        </div>
                        <div className="plot">{movie.Plot}</div>
                        <div className="dir">Director: <span className="text-light">{movie.Director} </span></div>
                        <div className="stars">Starring: <span className="text-light">{movie.Actors}</span></div>
                        <div className="ratings">{ratings} </div>
                        <div className="genres">Genres: {genre}</div>
                    </div>
                </div>
                
                <button className="nomination" onClick={() => nominateMovie(movie)} disabled={status}> 
                    <span className="btn-text">
                        {buttonText}
                    </span>
                </button>
            </div>
        </div>
    )
}