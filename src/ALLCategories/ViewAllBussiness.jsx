
import Nav from "../Components/Nav";
import React from "react";
import { useState, useEffect, useContext } from "react";
import "../Components/Category.css"
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader";

function ViewAllBussiness() {
  const [allBussiness, setAllBussiness] = useState([]);
  const[loading,setLoading]=useState(true);


  console.log("non-fiction", allBussiness);
  async function fetchData() {
    try {
      setLoading(true)
      const response = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=subject:business%20economics&maxResults=40"
      );
      console.log("booksdata", response.data.items);

      setAllBussiness(response.data.items);
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
              <p>Business & Economics</p>
              <hr />
            </div>
           
          </div>
        </div>

        <div className="cards">
          {
            loading?<Loader/>:allBussiness.map((ele, index, array) => {
              return (
                <div className="card" key={index}>
                  <NavLink to={`/SingleBussiness/${ele.id}`}>
  
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

export default ViewAllBussiness;
