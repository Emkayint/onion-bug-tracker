import React from "react";
import "./Dashboard.css"
import DashBoardHome from "./DashbordHome";
import DashNav from "./DashNav";

// This is the main dashboard responsible for handling search, filtered data and bug issues 
export default function Dashboard(){

  return (
    <div className="container-main h-100 dash-home">
      <div className="row h-100">
        <div className="col-md-3 col-lg-3 p-0">
          <DashNav />
        </div>
        <div className="col-md-9 col-lg-9 p-0">
          <DashBoardHome />
        </div>
      </div>
    </div>
  );
}