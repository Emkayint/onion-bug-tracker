import React from "react";


const CustomLinks = ({project, setActiveProject}) => {

  function handleActive(e) {
    setActiveProject(e);
  }
  return (
    <div className="nav-buttons mt-5" onClick={() => handleActive(project.id)}>
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