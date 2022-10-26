import React from "react";
import { useState } from "react";

export default function DashNav(){
  const [search, setSearch] = useState("")
  return (
    <div className="container-main h-100">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search with keywords"
        />
      </div>
      <hr />

      <header className="header-dashboard">
        <div className="py-3 p px-3">PROJECTS</div>
        <div className="">
          <span className="span1 mr-3"></span>
          <span className="span2"></span>
        </div>
      </header>
      <div className="projects px-3 py-2">
        <div className="nav-buttons">
          <div className="div">
            <p>All Projects</p>
          </div>
          <div className="spans">
            <span className="span3">10</span>
            <span className="span4">09</span>
          </div>
        </div>
        <div className="nav-buttons">
          <div className="div">
            <p>Doctor Strange</p>
          </div>
          <div className="spans">
            <span className="span3">30</span>
            <span className="span4">01</span>
          </div>
        </div>
        <div className="nav-buttons">
          <div className="div">
            <p>I am Grut</p>
          </div>
          <div className="spans">
            <span className="span3">3</span>
            <span className="span4">90</span>
          </div>
        </div>
        <div className="nav-buttons">
          <div className="div">
            <p>Robo Taxi</p>
          </div>
          <div className="spans">
            <span className="span3">23</span>
            <span className="span4">08</span>
          </div>
        </div>
      </div>
    </div>
  );
}