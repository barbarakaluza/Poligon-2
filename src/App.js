import React from "react";
import {
BrowserRouter as Router,
Route, 
Link
} from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";


import "./App.css";

function App() {
  return (
    <Router className="App">
      <Header />
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/articles">
        <Articles/>
      </Route>
      <Route path="/register">
      <Registration/>
      </Route>
      <Route path="/cantact">
        <Contact/>
      </Route>
      <Footer/>
    </Router>
  );
}

export default App;
