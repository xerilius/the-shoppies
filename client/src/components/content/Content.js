import React, { useEffect, useState, useRef } from 'react'
import SearchResults from './SearchResults'
import Nominations from './Nominations'
import Loading from './Loading'
import './css/Content.css'


export default function Content(props) {
    const {query, setMessage, message} = props
    const [nominated, setNominated] = useState([])
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const refContainer = useRef(null)
    
    useEffect(() => {
        setIsLoading(true)
        fetchAPIbyPage(1)
    }, [query]) 

    useEffect(() => {
        setIsLoading(true);
        fetchAPIbyPage(page);
    }, [page]);

    useEffect(() => {
        if (nominated.length === 5) {
            setMessage(
                {...message, 
                    alert: "Thank you for nominating 5 movies!",
                    error: "",
                }
            )
        } else {
            setMessage({...message, alert: ""})
        }
    }, [nominated])

    function fetchAPIbyPage(page) {
        fetch(`/api/movies/${query}/${page}`)
        .then(response => response.json())
        .then(results => {
            if (results.response === "True") {
                setData({movies: results.data, total: results.total});
                setMessage({...message, error: ""});
                setPage(page);
            } else {
                setData({movies: null, total: 0});
                setMessage({...message, error: results.data.Error});
            }  
        })
        .catch(error => console.error(error))
        .finally(
            setTimeout(() => { 
                setIsLoading(false);
            }, 600)
        );
    }

    function nominateMovie(movie) {
        if (nominated.length < 5) {
            setNominated([...nominated, movie])     
        } else {
            return
        }     
    }

    function removeNominatedMovie(movie) {
        let updatedNominatedMovies = [...nominated].filter(m => m !== movie)
        setNominated(updatedNominatedMovies)
    }

    function fetchNextPage(){
        setPage(page + 1)
    }

    function fetchPrevPage(){
        if (page !== 1) {
            setPage(page - 1)
        }
    }

    return (
        <>
          { isLoading ? <Loading /> :       
            <div className="container">
                <div className="container-contents">
                    <Nominations 
                        data={data.movies} 
                        nominated={nominated} 
                        remove={removeNominatedMovie}
                    />
                    <SearchResults 
                        ref={refContainer}
                        query={query}
                        data={data.movies} 
                        total={data.total}
                        nominated={nominated} 
                        nominateMovie={nominateMovie}
                        next={fetchNextPage}
                        prev={fetchPrevPage}
                        page={page}
                    />
                </div>
            </div>
          }
        </>
    )
}