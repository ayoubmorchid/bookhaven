// pages/books.jsx
import React from "react";
import "../style/books.css";
import Navbar from "../component/navbar";
import EpicReads from '../component/EpicReads'


const Books = () => {
  return (
    <>
      <Navbar />
      <EpicReads/>
    </>
  );
};

export default Books;
