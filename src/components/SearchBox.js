import React from 'react'
import './SearchBox.css'
import magnifier from '../assets/search.png'
const SearchBox = ({searchChange}) => {
    return(
        <div className="ba pa3 b--white br3 search">
            <input 
            className="search search-field"
            type="search" 
            placeholder="search-cats"
            onChange={searchChange}
            />
           <img src={magnifier} alt="magnifier" className="search-icon"></img>
        </div>
    )
}
export default SearchBox;