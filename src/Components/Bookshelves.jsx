import React, { useContext } from "react";
import userContext from "./UserContext";
import { NavLink } from "react-router-dom";
import "./Bookshelves.css";
function Bookshelves() {
  const { savedBooks, name } = useContext(userContext);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "1%" }}>Hello, {name}</h1>
      <h1 style={{ textAlign: "center", marginTop: "1%" }}>
        Your Books Shelves Are Here:{" "}
      </h1>

      {/* {
    savedBooks.map((value, index, array) => {
      return (
        <div>
          <h3>{value.volumeInfo.title}</h3>
        </div>
      )
    }) */}

      <div
        className="cards"
        style={{
          display: "flex",
          gap: "20%",
          marginTop: "5%",
          width: "80%",
          margin: "2px auto",
          paddingTop: "20px",
          paddingBottom: "30px",
        }}
      >
        {savedBooks.map((ele, index, array) => {
          return (
            <NavLink to={`/FictionBook/${ele.id}`}>
              <div
                className="card"
                key={index}
                style={{
                  width: "250px",
                  height: "250px",
                  marginInlineStart: "5%",
                  marginRight: "5%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "5%",
                }}
              >
                <img
                  src={ele?.volumeInfo?.imageLinks?.thumbnail}
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />

                <h3 style={{ fontSize: "16px" }}>{ele.volumeInfo.title}</h3>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default Bookshelves;
