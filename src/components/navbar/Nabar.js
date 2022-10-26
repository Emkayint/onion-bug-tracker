import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import  {BsBugFill,  BsLayersHalf, BsFlagFill, BsGearFill} from "react-icons/bs" 

export default function Navbar(){

  return (
    <div className="container-main Navbar h-100">
      <header>
        <h3>Tracker</h3>
      </header>
      <div className="container-main px-4">
        <br />
        <p>My Space</p>
      </div>
      <hr className="bg-secondary" />

      <div className="container-main px-4">
        <NavLink to="/hello">
          <p className="">
            <span className="pr-3">
              <BsFlagFill />
            </span>
            Milestones
          </p>
        </NavLink>
        <NavLink to="/hello">
          <p className="">
            <span className="pr-3">
              <BsBugFill />
            </span>
            Bugs
          </p>
        </NavLink>

        <NavLink to="/hello">
          <p className="">
            <span className="pr-3">
              <BsLayersHalf />
            </span>
            Feed
          </p>
        </NavLink>
      </div>
      <div className="container-main h-100 settings">
        <p className=""><span className="pr-3"><BsGearFill /></span> settings</p>
      </div>
    </div>
  );
}
