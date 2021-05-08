import React from 'react';
import NominationsCard from './NominationCard';
import './css/Nominations.css';


export default function Nominations(props) {
    const { data, nominated, remove } = props;

    let nominationDetails = nominated.map(
        (movie, i) => 
        <NominationsCard 
            rank={i+1} 
            remove={remove} 
            movie={movie}
        />
    );
    
    return (
        <>
           { nominated.length !== 0 && 
            <div className="container-nominations">
                <h1 className="top5">Top 5 Movies</h1>
                <div className="nominations">
                    {nominationDetails}
                </div>
           </div>
           }
        </>
    );
}