
import Nav from "../Components/Nav";
import React from "react";
import { useState, useEffect, useContext } from "react";
import "../Components/Category.css"
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader";

function ViewAllTravel() {
  const [allTravel, setAllTravel] = useState([]);
const[loading,setLoading]=useState(true)
  console.log("non-fiction", allTravel);
  async function fetchData() {
    try {
      setLoading(true)
      const response = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=subject:travel&maxResults=40"
      );
      console.log("booksdata", response.data.items);

      setAllTravel(response.data.items);
      setLoading(false)
    } catch {}
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
   

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
              <p>Travel</p>
              <hr />
            </div>
           
          </div>
        </div>

        <div className="cards">
          {
            loading?<Loader/>:allTravel.map((ele, index, array) => {
              return (
                <div className="card" key={index}>
                  <NavLink to={`/SingleTravelBook/${ele.id}`}>
  
                  <img src={ele.volumeInfo.imageLinks.thumbnail} alt="" />
  
                  <h3>{ele.volumeInfo.title}</h3>
                  </NavLink>
                </div>
              );
            })
          }
       
        </div>

        
      </div>
      </div>
    </>
  );
}

export default ViewAllTravel;
