import Home from "./Screens/Home";
import "./App.css";
import { Route, Routes, BrowserRouter ,useLocation} from "react-router-dom";
import SubCategory from "./Components/SubCategory.jsx";
import SingleItem from "./Components/SingleItem";
// import Auth from "./Screens/Auth";
import SignIn from "./Components/SignIn";
import AllFiction from "./ALLCategories/ViewAllFictions";
import AllNonFictions from "./ALLCategories/ViewAllNonFiction";
import { useState } from "react";
import userContext from "./Components/UserContext";
import { useContext } from "react";
import ViewAllTravel from "./ALLCategories/ViewAllTravel";
import ViewAllMystery from "./ALLCategories/ViewAllMystery";
import ViewAllBussiness from "./ALLCategories/ViewAllBussiness";
import FictionBook from "./EachCategory/FictionBook";
import SingleNonFiction from "./EachCategory/SingleNonFiction";
import SingleBussiness from "./EachCategory/SingleBussiness";
import SingleMystery from "./EachCategory/SingleMystery";
import SingleTravelBook from "./EachCategory/SingleTravelBook";
import ChatBot from "./Features/ChatBot";
import Nav from "./Components/Nav";
import CreateNotes from "./Features/CreateNotes";
import Translator from "./Features/Translator";
import Bookshelves from "./Components/Bookshelves";
import SearchedItem from "./EachCategory/SearchedItem";
import Footer from "./Components/Footer";



function App() {
  const [user, setUser] = useState({});
  const[categoryData,setcategorydata]=useState({});
  const[name,setName]=useState("");
  const[products, setProducts]=useState([])

 

  return (
    <>

    <userContext.Provider value={{user,setUser,categoryData,setcategorydata,name,setName,products, setProducts}}>
      <BrowserRouter>
      <Nav/>
        <Routes>
  
           <Route path="/" element={<SignIn />} />
           <Route path="/Home" element={<Home />} />
         
          <Route path="/SubCategory" element={<SubCategory />} />
          <Route path="/SingleItem/:itemId" element={<SingleItem />} />
          <Route path="/AllFiction" element={<AllFiction />} />
          <Route path="/AllNonFictions" element={<AllNonFictions />} />
          <Route path="/ViewAllTravel" element={<ViewAllTravel />} />
          <Route path="/ViewAllMystery" element={<ViewAllMystery />} />
          <Route path="/ViewAllBussiness" element={<ViewAllBussiness />} />
         
          <Route path="/FictionBook/:id" element={<FictionBook />} />
          <Route path="/SingleNonFiction/:id" element={<SingleNonFiction />} />
          <Route path="/SingleBussiness/:id" element={<SingleBussiness />} />
          <Route path="/SingleMystery/:id" element={<SingleMystery />} />
          <Route path="/SingleTravelBook/:id" element={<SingleTravelBook />} />
          <Route path="/ChatBot" element={<ChatBot />} />
          <Route path="/CreateNotes" element={<CreateNotes />} />
          <Route path="/Translator" element={<Translator />} />
          <Route path="/Bookshelves" element={<Bookshelves />} />
          <Route path="/SearchedItem/:id" element={<SearchedItem />} />


        </Routes>
       <Footer/>
      </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;


