import { NavLink } from "react-router-dom";


// This is responsible for displaying indivual card with number of comments available
export default function BugCard({issue}){
  return (
    <NavLink to={`/issue/${issue.id}`}>
      <div className="container-main card bug-card px-2 py-2 mb-2">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-md-1">
            <div className="id d-flex align-items-center ">BUG {issue.id}</div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="bug-name">
              <p className="">{issue.description}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="container-main d-flex justify-content-center">
              <span className="btn btn-primary bug-btn">{issue.status}</span>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="date text-center">03/04/22</div>
          </div>
          <div className="col-lg-2">
            <div className="due text-center">Due in 5days</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}