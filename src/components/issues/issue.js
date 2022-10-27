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
        {issue ? issue.project.name : ""} <span className="span-issue">Issue #{issue.id}</span> Comments
        <button className="btn back-btn"> Dashboard </button>
      </div>
      <div className="container-main px-3">
        
      </div>
    </div>
  );
} 