import React from "react";
import CustomLinks from "./CustomLinks";


// navigation page for the dashboard
export default function DashNav({projects, setActiveProject}){
  console.log(projects)

   
  const projectsDisplay = projects.map(project => {return <CustomLinks project = {project} key={project.id} setActiveProject = { setActiveProject }/>})
  return (
    <div className="container-main Navbar-Dash px-2 h-100">
      <div className="search pl-3  py-4">
        <header className="header-dashboard">
          <div className="py-3 p px-3">PROJECTS</div>
          <div className="">
            <span className="span2"></span>
          </div>
        </header>
      </div>

      <div className="projects pl-3 py-4">
        <div className="nav-buttons">
          <div className="div">
            <p>Total</p>
          </div>
          <div className="spans">
            <span className="span3">
              {projects.length < 10
                ? `0${projects.length}`
                : `${projects.length}`}
            </span>
          </div>
        </div>
        {projectsDisplay}
      </div>
    </div>
  );
}