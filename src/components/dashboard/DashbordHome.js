
import React from "react";
import {BsFilter} from "react-icons/bs"
import EfficiencyCard from "./efficiency-card";

export default function DashboardHome() {

  return (
    <div className="container-main h-100 bg-white">
      <div className="header-home d-flex align-items-center justify-content-between px-5">
        <div className="text">My Bugs</div>
        <div className="btn btn-primary csm-button">Report A new Bug</div>
      </div>
      <div className="efficiency p-3 d-flex align-items-center flex-wrap justify-content-around">
        <EfficiencyCard text="Hello World" number="30" color="#333" />
        <EfficiencyCard text="Hello World" number="30" color="#333" />
        <EfficiencyCard text="Hello World" number="30" color="#333" />
        <EfficiencyCard text="Hello World" number="30" color="#333" />
      </div>
      <div className="container-main bugs">
        <div className="titles row p-3">
          <div className="col-lg-4 col-sm-5 col-md-3">BUG</div>
          <div className="col-lg-2">STATUS</div>
          <div className="col-lg-2">CREATED</div>
          <div className="col-lg-2">DUE</div>
          <div className="col-lg-2">REPORTER</div>
        </div>
      </div>
    </div>
  );
} 