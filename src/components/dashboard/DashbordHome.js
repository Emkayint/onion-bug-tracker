
import React from "react";
import BugPage from "./BugPage";
import EfficiencyCard from "./efficiency-card";

//  main part of the dashboard 
export default function DashBoardHome() {

  return (
    <div className="container-main h-100 dash-home">
      <div className="header-home d-flex align-items-center justify-content-between px-5">
        <div className="text">My Bugs</div>
        <div className="btn custom-button">Report A new Bug</div>
      </div>
      <div className="efficiency p-3 d-flex align-items-center flex-wrap ">
        <EfficiencyCard text="Hello World" number="30" color="#E3FDFD" />
        <EfficiencyCard text="Hello World" number="30" color="#A6B1E1" />
        <EfficiencyCard text="Hello World" number="30" color="#FC5185" />
        <EfficiencyCard text="Hello World" number="30" color="#F5F5F5" />
      </div>
      <hr className="bg-secondary m-0 p-0" />
      <div className="container-main bugs p-3">
        <div className="titles row p-3">
          <div className="col-lg-4 col-sm-5 col-md-3">
            <p className="">BUG</p>
          </div>
          <div className="col-lg-2">
            <p className="text-center">STATUS</p>
          </div>
          <div className="col-lg-2">
            <p className="text-center">CREATED</p>
          </div>
          <div className="col-lg-2">
            <p className="text-center">DUE</p>
          </div>
          <div className="col-lg-2">
            <p className="text-center">REPORTER</p>
          </div>
        </div>
        <BugPage />
        <BugPage />
        <BugPage />
      </div>
    </div>
  );
} 