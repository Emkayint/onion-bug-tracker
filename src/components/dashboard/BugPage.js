import {BsPlusLg} from "react-icons/bs"
import BugCard from "./BugCard";
export default function BugPage(){
  
  return (
    <div className="container-main ">
      <header className="bug-title py-2">
        <span>
          <BsPlusLg />
        </span>
        <span className="px-3">Action Cable Revisited</span>
      </header>
      <div className="container-main">
        <BugCard />
        <BugCard />
        <BugCard />
        <BugCard />
      </div>
    </div>
  );
}