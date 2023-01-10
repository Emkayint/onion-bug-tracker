import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";


export default function IssueNav(){
  const token = localStorage.getItem("jwt") 
  const [comments, setComments] = useState([]) 
  useEffect(() => {
    fetch("https://tracker-production.up.railway.app/comments/", {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => {
          setComments(r)
        })
      }
    })
  }, [token, setComments])

  const commentsTodisplay = comments.map(comment => {
    return <Card comment = {comment} />
  })

  return (
    <div className="container-main h-100">
      <div className="all-issues p-3">
        <div className="issue-nav-header text-center">My Recent Comments</div>
        <hr />
        {commentsTodisplay}
      </div>
    </div>
  );
}