import React, { useState } from "react";

import Header from "./components/Header";
import Articles from "./pages/Articles";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Button from "./components/Button";

import "./App.css";

const green = "#2ecc71";
const grey = "#ecf0f1";


function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Articles />
        <Button bgColor="green" color="grey" label="Button"/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
