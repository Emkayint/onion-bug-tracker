import React from "react";

export default function Card(){
  return (
    <div className="container-main issue-card card mb-2 p-2">
      <p className="project-name">
        Project Name <span>Issue #3</span>
      </p>
      <p className="m-0 comment-message">I am working on this</p>
      <div className="">
        <p className="float-right px-2">Three days ago</p>
      </div>
    </div>
  );
}