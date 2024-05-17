import React, { useEffect } from "react";
import "./Nav.css";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import app from "../Screens/Firebase";
import { getAuth, signOut } from "firebase/auth";
import Loader from "./Loader";
import userContext from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";

const auth = getAuth();
function Nav() {
  const location = useLocation();
  //  console.log("location is ",location);

  const navigate = useNavigate();
  const [sidebarDisplay, setSidebarDisplay] = useState(false);

  const [input, setInput] = useState("");
  const [onsignOut, setOnsignOut] = useState(false);
  const { setUser, name, products, setProducts } = useContext(userContext);
  const [loading, setLoading] = useState(true);

  // console.log("logged name is ", name);
  async function logout() {
    try {
      const result = await signOut(auth);
      setUser({});
      // navigate("/");
      alert("User signed out");

      // alert("User signed out");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }
  useEffect(() => {
    if (input == "") {
      setProducts([]);
    }
  }, [input]);
  async function searchProducts() {
    try {
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=4`
      );
      navigate("/Home");
      console.log("booksdata", response.data.items);

      setProducts(response.data.items);

      console.log("productssss", products.volumeInfo.title);
      setLoading(false);
      // setcategorydata(response.data.categories)
      console.log("img data", products.volumeInfo.imageLinks);
    } catch {
      setLoading(false);
    }
  }
  return (
    <>
      {location.pathname == "/" ? (
        ""
      ) : (
        <nav>
          <div className="nav">
            <div className="upper">
              <div className="left">
                {/* <IoBookSharp /> */}
                <img
                  src="https://th.bing.com/th/id/OIP.XgTkxWxgY4ER7n_ijEPpVAHaEU?rs=1&pid=ImgDetMain"
                  alt=""
                  width="60px"
                />
                <p>
                  <NavLink
                    to="/Home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span>MyBooks</span>
                  </NavLink>
                </p>
                <div className="circle">
                  {/* <NavLink to="/"><h6 onClick={logout}>Log Out</h6></NavLink> */}
                  {/* <h6 onClick={logout}>Log Out</h6> */}
                </div>
                {/* <p>Hello {name}</p> */}
              </div>
              <div className="mid" style={{ display: "flex", gap: "10%" }}>
                <NavLink to="/ChatBot" style={{ textDecoration: "none" }}>
                  {" "}
                  <h3>chatbot</h3>
                </NavLink>
                <NavLink to="/CreateNotes" style={{ textDecoration: "none" }}>
                  {" "}
                  <h3> Notes</h3>
                </NavLink>
                <NavLink to="/Translator" style={{ textDecoration: "none" }}>
                  {" "}
                  <h3>Translator</h3>
                </NavLink>
              </div>

              <div
                className="right"
                onClick={() => {
                  setSidebarDisplay(!sidebarDisplay);
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="37"
                  width="27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
                </svg>
              </div>
            </div>

            <div style={{ display: sidebarDisplay ? "" : "none" }}>
              <SideBar
                sidebarDisplay={sidebarDisplay}
                setSidebarDisplay={setSidebarDisplay}
              />
            </div>

            <div className="lower">
              <div className="content">
                <div className="inputField">
                  <input
                    type="text"
                    placeholder="Search Books Here..."
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  />
                  <button onClick={searchProducts}>
                    <BiSearch style={{ color: "white", fontSize: "25px" }} />
                  </button>
                </div>
                <h1>
                  Unlock New Worlds, One Page at a Time. <br /> Explore Books
                  Now!
                </h1>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
