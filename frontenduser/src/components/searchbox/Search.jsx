import React from 'react'
import './Search.css'
import {FaSearch} from 'react-icons/fa'
const Search = () => {
  return (
    <div className='search'>
        <div className="searchbox">
            <input type="text" placeholder='Search Book' />
            <button><FaSearch/></button>
        </div>
    </div>
  )
}

export default Search
