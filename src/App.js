import React, { FC, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Books from "./components/Books";
import { Spinner } from "react-bootstrap";


const App = () => {
  return (
    <>
      <Header setBookTitle={setBookTitle}/>
      <Books/>
    </>
  );
};

export default App;
