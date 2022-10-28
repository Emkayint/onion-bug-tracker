import React, { useEffect } from "react";
import { useState } from "react";
import { Routes } from "react-router-dom";
import Issue from "../issues/issue";
import "./Dashboard.css"
import DashBoardHome from "./DashbordHome";
import DashNav from "./DashNav";

// This is the main dashboard responsible for handling search, filtered data and bug issues 
export default function Dashboard(){

  const token = localStorage.getItem("jwt")
  const [projects, setProject] = useState([])
  const [activeProject, setActiveProject] = useState(0)
  useEffect(() => {
    fetch("http://localhost:4000/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => {
          setProject(r)
        })
      }
    })
  }, [token, setProject])
  // console.log(projects)

  return (
    <div className="container-main h-100 dash-home">
      <div className="row h-100">
        <div className="col-md-2 col-lg-3 p-0">
          <DashNav projects = {projects} setActiveProject = { setActiveProject }/>
        </div>
        <div className="col-md-10 col-lg-9 p-0">
          <DashBoardHome projects = {projects} activeProject = {activeProject}/>
        </div>
      </div>
    </div>
  );
}