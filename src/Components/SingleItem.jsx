import React, { useState } from "react";
import Nav from "./Nav";
import Category from "./Category";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "./SingleItem.css";
function SingleItem() {
  const param = useParams();
  const [singleItem, setSingleItem] = useState([]);

  async function fetchProduct() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.itemId}`
    );
    console.log("singleitem", response.data.meals[0]);
    setSingleItem(response.data.meals[0]);
  }

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      {/* <Nav /> */}
      <div className="singleItem">
        
          <div className="heading">
            <div className="list">
              <ul>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                  </svg>
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="23"
                    width="23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                    <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                  </svg>
                </li>
                <li>
                  <span>{singleItem.strMeal}</span>
                </li>
              </ul>
            </div>
          </div>
          <p>MEAL DETAILS</p>
          <hr />
          <div className="innerData">
          <div className="eachItem">
            <div className="left">
              <img src={singleItem.strMealThumb} alt="" />
            </div>
            <div className="right">
              <h3 id="head">{singleItem.strMeal}</h3>
              <hr id="sitem" />
              <h3>CATEGORY : {singleItem.strIngredient1}</h3>
              <h3>Source : {singleItem.strSource}</h3>
              <br />
              <div className="info">
                <h2>Ingredients</h2>
              </div>
            </div>
          </div>

          <div className="instructions">
           <h3> Instructions : </h3>

           <p style={{fontSize:"18px",letterSpacing:"0"}}>🔑{singleItem.strInstructions}<br></br></p>

           {/* {
           
            .forEach(function(item){console.log(item)})
           } */}
          </div>
        </div>
      </div>
      <Category />
    </>
  );
}

export default SingleItem;
