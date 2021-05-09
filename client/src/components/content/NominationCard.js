import React from 'react'
import './css/NominationCard.css'
import posterNA from  '../../assets/posterNA.png'


export default function NominationsCard(props) {
    const { movie, remove, rank } = props

    return (
        <div className="nomination-card">
            <div className="rank">0{rank}</div>
            <div className="nom-content">
                <div className="nom-info">
                    <img className="nom-img" src={movie.Poster !== 'N/A' ? movie.Poster : posterNA} />
                    <div className="nom-title">
                        {movie.Title} ({movie.Year})
                    </div>  
                </div> 
                <div className="banner">
                    <div className="nom-banner">Nominated</div>
                    <div className="nom-banner-bottom"></div>
                    <button className="remove" onClick={() => remove(movie)}>
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}