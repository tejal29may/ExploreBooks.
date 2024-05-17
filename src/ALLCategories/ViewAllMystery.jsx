
import Nav from "../Components/Nav";
import React from "react";
import { useState, useEffect, useContext } from "react";
import "../Components/Category.css"
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader";

function ViewAllMystery() {
  const [allMystery, setAllMystery] = useState([]);
const[loading,setLoading]=useState(true)


  console.log("non-fiction", allMystery);
  async function fetchData() {
    try {
      setLoading(true)
      const response = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=subject:historical%20fiction&maxResults=15"
      );
      console.log("booksdata", response.data.items);

      setAllMystery(response.data.items);
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
              <p>Historical Fiction</p>
              <hr />
            </div>
           
          </div>
        </div>

        <div className="cards">
          {
            loading?<Loader/>:allMystery.map((ele, index, array) => {
              return (
                <div className="card" key={index}>
                  <NavLink to={`/SingleMystery/${ele.id}`}>
  
                  <img src={ele?.volumeInfo?.imageLinks?.thumbnail} alt="" />
  
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

export default ViewAllMystery;
