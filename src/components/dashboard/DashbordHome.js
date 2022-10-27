
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import BugPage from "./BugPage";
import EfficiencyCard from "./efficiency-card";

export default function DashBoardHome({projects}) {

  // const {active} = useContext(AppContext)
  // const token = localStorage.getItem("jwt")
  // const [project, setProject] = useState([]) 
  // useEffect(() => {
  //   fetch(`http://localhost:4000/projects/${active}`, {
  //     method: "GET", 
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //   .then(r => {
  //     r.json().then(r => {
  //       setProject(r)
  //     })
  //   })
  // }, [])

  const issuesTodisplay = projects.map((project) => {
    return <BugPage project={project} />
  })

  

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
          <div className="col-lg-4 col-sm-4 col-md-4">
            <p className="">BUG</p>
          </div>
          <div className="col-lg-2 col-sm-2 col-md-2">
            <p className="text-center">STATUS</p>
          </div>
          <div className="col-lg-2 col-sm-1 col-md-2">
            <p className="text-center">CREATED</p>
          </div>
          <div className="col-lg-2 col-sm-2 col-md-2">
            <p className="text-center">DUE</p>
          </div>
          <div className="col-lg-2 col-sm-2 col-md-2">
            <p className="text-center">REPORTER</p>
          </div>
        </div>

        {issuesTodisplay}
        {/* <BugPage /> */}
        {/* <BugPage /> */}
        {/* <BugPage /> */}
      </div>
    </div>
  );
} 