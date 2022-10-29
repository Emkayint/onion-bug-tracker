import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {MdSupport} from "react-icons/md"
import Card from "./card";


export default function IssueNav(){
  const token = localStorage.getItem("jwt") 
  const [comments, setComments] = useState([]) 
  useEffect(() => {
    fetch("http://localhost:4000/mycomments/", {
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
    <div className="container-main">
      <div className="all-issues p-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}