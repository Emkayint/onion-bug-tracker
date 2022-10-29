import React from "react";
import Navbar from "../navbar/Nabar";
import "./profile.css"

export default function Profile(){
  return (
    <div className="container-main card h-100">
      <div className="row h-100">
        <div className="col-sm-12 col-md-3 col-lg-3 h-100">
          <Navbar />
        </div>
        <div className="col-sm-12 col-md-9 col-lg-9 p-5">
          <div className="container-main h-100 card profile-card">
            <div className="profile-header text-center pt-2">
              <img src="./download.png" alt="" />
            </div>
            <div className="classname pt-5">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="container-main p-2">
                    <div className="profile-info-card-1 p-4">Mellow</div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="container-main p-2">
                    <div className="profile-info-card-2 p-4">Jello</div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="container-main p-2">
                    <div className="profile-info-card-3 p-4">yello</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}