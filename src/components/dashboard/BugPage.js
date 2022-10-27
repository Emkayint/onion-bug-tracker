import { useState } from "react";
import {BsPlusLg} from "react-icons/bs"
import BugCard from "./BugCard";

// Is responsible for displaying project and issues opened for each
// project
export default function BugPage({project}){
  const [display, setDisplay] = useState(false)
  console.log(project)

  const issuesTodisplay = project.issues.map(issue => {
    return <BugCard issue = {issue} />
  })

  const handleDisplay = () => {
    setDisplay(!display)
  }
  return (
    <div className="container-main ">
      <header className="bug-title py-2" onClick={handleDisplay}>
        <span>
          <BsPlusLg />
        </span>
        <span className="px-3">{project.name}</span>
      </header>
      <div className={display ? "container-main block": "container-main none"}>
        {issuesTodisplay}
      </div>
    </div>
  );
}