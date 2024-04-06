import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./SubCategory.css";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import userContext from "./UserContext";
import { useContext } from "react";


function SubCategory({category,setCategory}) {

const{categoryData}=useContext(userContext)


console.log("category data",categoryData);
  const param = useParams();
  const [SubCategory, setSubCategory] = useState([]);
  console.log("params", param.SubCategory);
  
    console.log("desc",param.strCategoryDescription);
  
  async function fetchSubCategoryProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.SubCategory}`
    );
   
    setSubCategory(result.data.meals);
  }
  useEffect(() => {
    fetchSubCategoryProduct();
    console.log(SubCategory);
    console.log("category",category);
  }, []);
  return (
    <>
      <Nav />

      <div className="details">
        <h2>{param.SubCategory}</h2>
        
        {/* {
           param.SubCategory===categoryData.strCategory? <p>{categoryData.strCategoryDescription}</p>:""
      
           
        } */}

         <p>{param.strCategoryDescription}</p>
       
       
      </div>
      <div className="main">
        <p>Meals</p>
        <hr />

        <div className="cards">
          {SubCategory.map((ele, index, array) => {
            return(
              <div className="card" key={index}>
                <NavLink to={`/SingleItem/${ele.idMeal}`}>
              <h3>{ele.strMeal.slice(0,15)}</h3>
              <img
                src={ele.strMealThumb}
                alt=""
              />
              </NavLink>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default SubCategory;
