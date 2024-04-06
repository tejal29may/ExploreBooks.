import React from 'react'
import userContext from './UserContext';
import { useContext } from 'react';
import "./Nav.css"
import { NavLink } from 'react-router-dom';



function SearchResult() {

    const{products}=useContext(userContext)
  return (
   <>
   
   {products.length>0 ? (
        <div className="cardsssss">
          {products.map((ele, index, array) => {
            return (
                <NavLink to={`/SearchedItem/${ele.id}`}>
              <div className="card" key={index}>
                
                <img src={ele?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                <h3>{ele.volumeInfo.title}</h3>
                
                <h2>{ele?.volumeInfo?.volumeInfo?.categories[0]}</h2>
               
              </div>
              </NavLink>
            );
          })}
        </div>
      ) : (
        ""
      )}
   </>
  )
}

export default SearchResult