import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./commentCard";
import "./issue.css";

export default function Issue() {
  const { id } = useParams();

  const [issue, setIssue] = useState("");
  const token = localStorage.getItem("jwt");
  const [message, setMessage] = useState("");
  // console.log(issue)

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
  }, [token, setIssue]);

  function handleSubmit(e) {
    e.preventDefault();
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
          // setIssue(r)
          setMessage("");
        });
      }
    });
  }

  return (
    <div className="container-main h-100">
      <div className="container-main issue-header">
        {issue ? issue.project.name : ""}{" "}
        <span className="span-issue">Issue #{issue.id}</span> Comments
        <button className="btn back-btn"> Dashboard </button>
      </div>
      <div className="container-main p-5 comment-section">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
      <div className="px-5 py-4 new-comment ">
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
  );
}
