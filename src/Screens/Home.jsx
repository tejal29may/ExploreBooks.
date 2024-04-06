import React from "react";
import Nav from "../Components/Nav";
// import Category from '../Components/Category'

import { lazy, Suspense } from "react";
const Category = React.lazy(() => import("../Components/Category"));
import userContext from "../Components/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



function Home() {
  // const navigate=useNavigate()
  // const{name}=useContext(userContext);
  // console.log("name",name);
  // navigate("/")
  // if(!name){
  //   console.log("ahssjdjd");
   
  // //  return <navigate to="/SignIn"/>
   
  // }
  return (
    <>
     
      <Suspense fallback={<div>Loading.......</div>}>
        <Category/>
      </Suspense>
    </>
  );
}

export default Home;
