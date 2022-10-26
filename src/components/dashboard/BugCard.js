import {BsChatDots} from "react-icons/bs"
export default function BugCard(){
  return (
    <div className="container-main card px-2 pt-2 mb-2">
      <div className="row">
        <div className="col-lg-1">
          <div className="id">MER23</div>
        </div>
        <div className="col-lg-3">
          <div className="bug-name">
            <p>Create Company logo in 3 different Styles</p>
            <p>
              <BsChatDots /> 43
            </p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="container-main d-flex justify-content-center">
            <span className="btn btn-primary">Failed QA</span>
          </div>
        </div>
        <div className="col-lg-2">03/04/22</div>
        <div className="col-lg-2">Due in 5days</div>
      </div>
    </div>
  );
}