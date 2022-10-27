import React from "react";
import { useState } from "react";
import CustomLinks from "./CustomLinks";


// navigation page for the dashboard
export default function DashNav({projects}){
  const [search, setSearch] = useState("")
  console.log(projects)

  const projectsDisplay = projects.map(project => {return <CustomLinks project = {project}/>})
  return (
    <div className="container-main Navbar-Dash h-100">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search with keywords"
        />
      </div>
      <header className="header-dashboard">
        <div className="py-3 p px-3">PROJECTS</div>
        <div className="">
          <span className="span2"></span>
        </div>
      </header>
      <hr  className="bg-secondary"/>
      <div className="projects px-3 py-2">
        <div className="nav-buttons">
          <div className="div">
            <p>All Projects</p>
          </div>
          <div className="spans">
            <span className="span3">{projects.length < 10 ? `0${projects.length}` : `${projects.length}`}</span>
          </div>
        </div>
        {projectsDisplay}
      </div>
    </div>
  );
}