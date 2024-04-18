import Nav from "../Components/Nav";
import React from "react";
import { useState, useEffect, useContext } from "react";
import "../Components/Category.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaRegSave } from "react-icons/fa";
import Loader from "../Components/Loader";
function AllFictions() {
  const [fiction, setFiction] = useState([]);
  const[loading,setLoading]=useState(true);

  console.log("non-fiction", fiction);
  async function fetchData() {
    try {
      setLoading(true)
      const response = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=30"
      );
      console.log("booksdata", response.data.items);

      setFiction(response.data.items);
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
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="head"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p>Fiction</p>
                <hr />
              </div>
            </div>
          </div>

          <div className="cards" style={{ gap: "5%" }}>
            {
              loading?<Loader/>:fiction.map((ele, index, array) => {
                return (
                  <NavLink to={`/FictionBook/${ele.id}`}>
                   
                    <div className="card" key={index}>
                    
                     
                      <img src={ele?.volumeInfo?.imageLinks?.thumbnail} alt="" />
  
                      <h3 style={{fontSize:"16px"}}>{ele.volumeInfo.title}</h3>
                     
                      
                    </div>
                  </NavLink>
                );
              })
            }
            
          </div>

         
        </div>
      </div>
    </>
  );
}

export default AllFictions;
