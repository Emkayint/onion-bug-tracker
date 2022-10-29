import React from "react";


const CustomLinks = ({project}) => {

 
  return (
    <div className="nav-buttons mt-2" >
      <div className="div">
        <p>{project.name}</p>
      </div>
      <div className="spans">
        <span className="span3">
          {project.issues.length < 10 ? `0${project.issues.length}` : ``} 
        </span>
      </div>
    </div>
  );
};

export default CustomLinks