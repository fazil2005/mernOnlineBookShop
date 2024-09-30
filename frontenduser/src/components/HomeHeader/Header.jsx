import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='header'>
      <div className="headerleft">
        <div className='booklogo'>
        
        <img src="https://static.vecteezy.com/system/resources/previews/016/890/259/non_2x/young-successful-man-confident-gesturing-welcome-sign-and-smiling-while-standing-flat-illustration-isolated-on-white-background-vector.jpg" alt="" />
        </div>
        
        <p>For a limited time, enjoy 50% off on all books with your first three orders! Dive into your next great read and save big. Don’t miss out on this fantastic opportunity to expand your library at half the price</p>
       <Link to={'/book'}> <button>Show</button></Link>
        <h2>Top Story's This WEEK <span>It ends with us (122)</span></h2>
        <div className="offerbooks">   
            <div className="offerlist">
                <img src="https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/66c43cd97de28ddc4850e901_share.jpg" alt="" />        
            </div>
            <div className="offerlist">
                <img src="https://i0.wp.com/diaryofdifference.com/wp-content/uploads/2024/08/Book-Review-Banner13.jpg?ssl=1" alt="" />        
            </div>
           
            
           
        </div>
      </div>
      <div className="headerright">
        <h1>Books are a uniquely portable magic.</h1>
        <img src="https://i.pinimg.com/564x/ec/e6/a6/ece6a6fc8858d668c5a50250ca9480a8.jpg" alt="" />
      </div>
    </div>
    
    </>
  )
}

export default Header
