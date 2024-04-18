import React from "react";
import Nav from "../Components/Nav";


import { lazy, Suspense } from "react";
const Category = React.lazy(() => import("../Components/Category"));
import userContext from "../Components/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { name } = useContext(userContext);

  // if (!name) {
  //   setTimeout(() => {
  //     return navigate("/");
     
  //   }, 5000);
  // } else {
    return (
      <>
        <Suspense fallback={<div>Loading.......</div>}>
          <Category />
        </Suspense>
      </>
    );
  }
// }

export default Home;
