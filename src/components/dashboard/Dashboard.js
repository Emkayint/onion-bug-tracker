import React from "react";
import "./Dashboard.css"
import DashboardHome from "./DashbordHome";
import DashNav from "./DashNav";

export default function Dashboard(){

  return (
    <div className="container-main h-100">
      <div className="row h-100">
        <div className="col-md-3 col-lg-3 p-0">
          <DashNav />
        </div>
        <div className="col-md-9 col-lg-9 p-0">
          <DashboardHome />
        </div>
      </div>
    </div>
  );
}