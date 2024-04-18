import React from "react";
import "./SideBar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import userContext from "./UserContext";
import { useContext } from "react";





function SideBar({ setSidebarDisplay, sidebarDisplay }) {

 
  const [sideBar, setSidebar] = useState([]);

  const { name } = useContext(userContext);

  async function fetchData() {
    try {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log("side bar data is ", response.data.categories);
    
      setSidebar(response.data.categories);
    } catch {}
  }

  


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="delete">
          <div className="userdetails" style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20%", padding:"10px 0"}}>
          <h2>Hii {name}</h2>
          <p
            onClick={() => {
              setSidebarDisplay(!sidebarDisplay);
            }}
          >
            ❌
          </p>
          </div>
          
          <hr className="pgr" />

          <ul className="uldata">
          
            <NavLink to="/Home" className="navLink">
              {" "}
              <li>Home</li>
            </NavLink>
            <NavLink to="/AllFiction" className="navLink">
              {" "}
              <li>Fiction</li>
            </NavLink>
            <NavLink to="/AllNonFictions" className="navLink">
              {" "}
              <li>Non Fiction</li>
            </NavLink>
            <NavLink to="/ViewAllMystery" className="navLink">
              {" "}
              <li>Historical Fiction</li>
            </NavLink>
            <NavLink to="/ViewAllTravel" className="navLink">
              {" "}
              <li>Travel</li>
            </NavLink>
            <NavLink to="/ViewAllBussiness" className="navLink">
              {" "}
              <li>Bussiness & Economics</li>
            </NavLink>
            <NavLink to="/ChatBot" className="navLink">
              {" "}
              <li>Use ChatBot</li>
            </NavLink>
            <NavLink to="/Translator" className="navLink">
              {" "}
              <li>Use Translator</li>
            </NavLink>
            <NavLink to="/CreateNotes" className="navLink">
              {" "}
              <li>Create Your Own Notes</li>
            </NavLink>
            <NavLink to="/Bookshelves" className="navLink">
              {" "}
              <li>Your Bookshelves</li>
            </NavLink>
            <NavLink to="/" className="navLink">
              {" "}
              <li>Log Out</li>
            </NavLink>
            
              
        
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
