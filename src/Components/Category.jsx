import React, { useEffect } from "react";
// import "./Category.css";
import "../Components/Category.css";
import { useState } from "react";
// import { NavLink } from "react-router-dom";

import axios from "axios";
import { NavLink } from "react-router-dom";
import userContext from "./UserContext";
import { useContext } from "react";
import NonFiction from "./NonFiction";
import Mystery from "./Mystery";
import Travel from "./Travel";
import Bussiness from "./Bussiness";
import SearchResult from "./SearchResult";

function Category() {
  const { setcategorydata } = useContext(userContext);

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  // const [loading, setLoading] = useState(false);
  console.log("category", category);
  async function fetchData() {
    try {
      const response = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=4"
      );
      console.log("booksdata", response.data.items);
      console.log("category",category);
      setCategory(response.data.items);
      setLoading(false);
      // setcategorydata(response.data.categories)
    } catch {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <SearchResult/>
      <div className="main">
        <div className="wholeData">
        <div className="head">
          <div
            className="content"
            style={{ display: "flex", justifyContent: "space-between"}}
          >
            <div
              className="head"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>Fiction</p>
              <hr />
            </div>
            <NavLink to="/AllFiction">
              {" "}
              <h3 >view-All</h3>
            </NavLink>
          </div>
        </div>

        <div className="cards">
          {category.map((ele, index, array) => {
            return (
              
              <div className="card" key={index}>
                

                <img src={ele?.volumeInfo?.imageLinks?.thumbnail} alt="" />

                <h3>{ele.volumeInfo.title}</h3>
             
              </div>
             
            );
          })}
        </div>

        {/* Non fiction data */}

        <NonFiction />
        <Mystery />
        <Travel />
        <Bussiness />
       
      </div>
      </div>
    </>
  );
}

export default Category;
