import React from "react";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../navbar/Nabar";
import "./home.css"

// Main page for home 
export default function Home() {
  
  return (
    <div className="container-main hero h-100">
      <div className="row h-100">
        <div className="col-sm-12 col-md-2 col-lg-2 h-100 p-0">
          <Navbar />
        </div>
        <div className="col-sm-12 col-md-9 col-lg-10 h-100">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}