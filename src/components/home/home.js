import React from "react";
import Navbar from "../navbar/Nabar";
import "./home.css"

export default function Home() {
  
  return (
    <div className="container-main hero ">
      <div className="row h-100">
        <div className="col-sm-12 col-md-3 col-lg-2 h-100">
          <Navbar />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-10"></div>
      </div>
    </div>
  );
}