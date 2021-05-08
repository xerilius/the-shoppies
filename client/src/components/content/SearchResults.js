import React from 'react'
import SearchResultCard from './SearchResultCard'
import './css/SearchResults.css'


export default function SearchResults(props) {
    const { query, data, total, nominated, nominateMovie, 
        prev, next, page } = props
    let statusPrev = page === 1 ? true : false
    let statusNext = Math.floor(total /10) <= page ? true : false
    let results = ''
    if (data) {
        results = data.map(
            movie => <SearchResultCard 
                         key={movie.imdbID} 
                         nominated={nominated} 
                         nominateMovie={nominateMovie} 
                         movie={movie}
                    />
        )
    } 
 
    return (
        <>
           { data && 
            <div className="container-results">
                <div className="results-header">
                    {total} Results for "{query}"
                </div>
                <div className="results">
                    {results}
                </div>
                <div className="page-navigation">
                    <button 
                        disabled={statusPrev} 
                        onClick={() => prev()} 
                        className="page prev">
                       <i class="fas fa-chevron-left"></i> 
                       <span className="prev-text">Prev</span>
                    </button>
                    <button 
                        onClick={() => next()} 
                        className="page next"
                        disabled={statusNext}>
                        <span className="next-text">Next</span> 
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        }
        {!data && 
        <div className="container-results center">
            <div className="results-header">0 Results for "{query}"</div>
        </div>
        }
        </>
    )
}