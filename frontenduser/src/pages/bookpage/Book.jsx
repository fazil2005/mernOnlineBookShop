import React from 'react'
import './Book.css'
import Search from '../../components/searchbox/Search'
import Product from '../../components/products/Product'
const Book = () => {
  return (
    <div className='book'>
      <Search/>
      <Product/>
    </div>
  )
}

export default Book
