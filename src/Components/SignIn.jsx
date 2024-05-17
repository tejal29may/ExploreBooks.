import "./SignIn.css";
import React, { useState } from "react";
import app from "../Screens/Firebase";
import { db } from "../Screens/Firebase";
import { v4 as uuidv4 } from "uuid";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignIn.css";

import userContext from "./UserContext";
import { useContext } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const auth = getAuth();
function SignIn() {
  const { setUser, setName, name } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  // const [name, setName] = useState("");

  // const [user, setUser] = useState({});

  const navigate = useNavigate();

  async function handle() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      notify();
      // alert("User created");
     
      console.log(result.user.providerData[0].uid);

      // await setDoc(doc(db, "users", uuidv4()), {
      //   Name: name,
      // });

      console.log("name setter", name);
     
      await getBlog();
    } catch (err) {
      console.log(err);
      // notify2();
      // alert(err.message);
    }
  }

  async function getBlog() {
    const docRef = doc(db, "users", uuidv4());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  async function signInFun() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
    
      navigate("/Home");
      console.log("home section");
      console.log(user);
    } catch (err) {
      console.log("error", err);
     
    }
  }

  const notify = () => {
    toast.success("Successfully registerd!")
  }
 
 
  const notify2=()=>{
      toast.error("User Already Registered !", {
     
  })}
  return (
    <>
      <div class="main2">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <label for="chk" aria-hidden="true">
            Sign up
          </label>

          <input
            type="text"
            placeholder="User name"
            className="input3"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="email"
            placeholder="Email"
            required=""
            className="input3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required=""
            className="input3"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button onClick={handle}>Sign up</button>
          <ToastContainer />
        </div>

        <div class="login">
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required=""
            className="input3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="pswd"
            placeholder="Password"
            required=""
            className="input3"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />

          <button onClick={signInFun}>Login</button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
