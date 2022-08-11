import React from "react";
import { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import Airlines from "./components/Airlines";

function App() {
  const [page, setPage] = useState("/")
  const [airlines,setAirlines] = useState([])
  useEffect(() => {
    fetch("/airlines")
    .then((r) => r.json())
    .then((airlines) => setAirlines(airlines));
  }, []);

  const [reviews, setReviews] = useState([])
  useEffect(() => {
      fetch("/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
    }, []);

    

    

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route exact path="/airlines" element = {<Airlines airlines={airlines}/>}/>
        <Route exact path="/reviews" element={<Reviews reviews={reviews} airlines = {airlines}/>}/>
        <Route exact path="/login" element = {<Login/>}/>
     </Routes>
    </div>
  )
}



export default App;