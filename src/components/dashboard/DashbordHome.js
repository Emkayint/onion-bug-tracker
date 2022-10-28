
import React from "react";
import BugPage from "./BugPage";

export default function DashBoardHome({projects}) {

  const issuesTodisplay = projects.map((project) => {
    return <BugPage project={project} />
  })

  return (
    <div className="container-main h-100 dash-home p-4">
      <div className="header-home d-flex align-items-center justify-content-between px-5">
        <div className="text">My Bugs</div>
        <div className="btn custom-button">Report A new Bug</div>
      </div>
    
      <div className="container-main bugs p-3">
        <div className="titles row p-3">
          <div className="col-lg-2 col-sm-2 col-md-2">
            <p className="">|BUG ID| </p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p className="text-center">|DESCRIPTION|</p>
          </div>
          <div className="col-lg-2 col-sm-2 col-md-2">
            <p className="text-center">|STATUS|</p>
          </div>
          <div className="col-lg-2 col-sm-1 col-md-2">
            <p className="text-center">|CREATED|</p>
          </div>
          <div className="col-lg-2 col-sm-2 col-md-2">
            <p className="text-center">|DUE|</p>
          </div>
        </div>

        {issuesTodisplay}
      </div>
    </div>
  );
} 