import React from "react";
import { useState, useEffect, useContext } from "react";
import userContext from "./UserContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
function NonFiction() {
  const [nonfiction, setNonFiction] = useState([]);

  console.log("non-fiction", nonfiction);
  async function fetchData() {
    try {
      const response = await axios(
        "https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&maxResults=4"
      );
      console.log("booksdata", response.data.items);

      setNonFiction(response.data.items);
    } catch {}
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div
        className="content"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="head"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>NOn Fiction</p>
          <hr />
        </div>

        <NavLink to="/AllNonFictions">
          <h3>View All</h3>
        </NavLink>
      </div>
      <div className="cards">
        {nonfiction.map((ele, index, array) => {
          return (
            <div className="card" key={index}>
              {/* <NavLink to={`/SubCategory/${ele.strCategory}`}> */}

              <img src={ele?.volumeInfo?.imageLinks?.thumbnail} alt="" />

              <h3>{ele.volumeInfo.title}</h3>
              {/* </NavLink> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NonFiction;
