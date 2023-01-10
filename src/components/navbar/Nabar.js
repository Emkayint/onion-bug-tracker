import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import {
  BsBugFill,
  BsFlagFill,
  BsGearFill,
  BsPersonCircle,
} from "react-icons/bs"; 

export default function Navbar(){

  return (
    <div className="container-main Navbar h-100">
      <div className="container-main px-3 py-4">
        <NavLink to="/">
          <p className="py-4">
            <span className="pr-3">
              <BsFlagFill />
            </span>
            Milestones
          </p>
        </NavLink>
        <NavLink to="/">
          <p className="py-4">
            <span className="pr-3">
              <BsBugFill />
            </span>
            Bugs
          </p>
        </NavLink>

        <NavLink to="/profile">
          <p className="py-4">
            <span className="pr-3">
              <BsPersonCircle />
            </span>
            Profile
          </p>
        </NavLink>
        <div className="container-main h-100 settings py-4">
          <p className="">
            <span className="pr-3">
              <BsGearFill />
            </span>{" "}
            settings
          </p>
        </div>
      </div>
    </div>
  );
}
