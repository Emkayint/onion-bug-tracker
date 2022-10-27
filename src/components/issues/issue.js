import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import "./issue.css"


export default function Issue() {
  // const { id } = useParams()

  const [issue, setIssue] = useState('')
  const token = localStorage.getItem("jwt")
  console.log(issue)

  useEffect(() => {
    fetch(`http://localhost:4000/issues/1`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => {
          setIssue(r)
        })
      }
    })
  }, [token, setIssue])
  return (
    <div className="container-main h-100">
      <div className="container-main issue-header">
        Issue <span className="span-issue">#{issue.id}</span> Comments
        <button className="btn back-btn"> Dashboard </button>
      </div>
      <div className="container-main px-3">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2">
            <div className="container-main bg-dark">
              <div className="issue-info py-3 text-center">
                Project {issue.project.name}
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10">
            <div className="container-main">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 