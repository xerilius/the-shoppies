import React, {useState} from 'react'
import './SearchBar.css'


export default function SearchBar(props) {
    const { handleSubmit } = props
    const [input, setInput] = useState('')
    const placeholderText = '🎬 Search a movie title'

    return (
        <>
            <div className="searchbar">
                <form onSubmit={(e) => handleSubmit(e, input)}>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        name="search"
                        type="text" 
                        placeholder={placeholderText} 
                    /> 
                    { input !== '' &&     
                        <div className="clear" onClick={() => setInput("")}>
                            <i className="fas fa-backspace fa-2x"></i>
                        </div>
                    }
                </form>
            </div>
        </>
    );
}