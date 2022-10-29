import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CommentCard from "./commentCard";
import "./issue.css";
import {BsHouseDoorFill} from "react-icons/bs"
import Navbar from "../navbar/Nabar";
import IssueNav from "./IssueNav";
export default function Issue() {
  const { id } = useParams();
  const [issue, setIssue] = useState("");
  const token = localStorage.getItem("jwt");
  const [message, setMessage] = useState("");

  const commentToDisplay = issue ? issue.comments.map(comment => {
    return <CommentCard id = {comment.id} key = {comment.id}/>
  }) : ""

  useEffect(() => {
    fetch(`http://localhost:4000/issues/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          setIssue(r);
        });
      }
    });
  }, [token, setIssue, id]);

  function handleSubmit(e) {
    e.preventDefault();
    if(!issue) return;
    const data = {
      message: message,
      issue_id: issue.id,
    };

    fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          setIssue(r)
          setMessage("");
        });
      }
    });
  }

  return (
    <div className="container-main card issue h-100">
      <div className="row h-100">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <Navbar />
        </div>
        <div className="col-sm-2 col-lg-6 col-md-6 p-3 comment-top">
          <div className="container-main issue-header d-flex justify-content-around align-items-center">
            <div className="header-items">
              {issue ? issue.project.name : ""}{" "}
              <span className="span-issue">
                Issue #{issue ? issue.id : `${id} does not exist`}
              </span>{" "}
              Comments
            </div>
            
          </div>
          <div className="container-main p-5 comment-section">
            {commentToDisplay}
          </div>
          <div className="px-5 py-3 new-comment ">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input type="submit" value="comment" className="submit px-2" />
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <IssueNav />
        </div>
      </div>
    </div>
  );
}
