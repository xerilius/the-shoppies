import React, {useState} from 'react'
import './SearchBar.css'


export default function SearchBar(props) {
    const { handleSubmit } = props;
    const [input, setInput] = useState("");

    return (
        <>
            <div className="searchbar">
                <form onSubmit={(e) => handleSubmit(e, input)}>
                    <label><i className="fas fa-search fa-2x"></i></label>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        name='search'
                        type='text' 
                        placeholder='Enter Movie'
                    />
                </form>
            </div>
        </>
    );
}