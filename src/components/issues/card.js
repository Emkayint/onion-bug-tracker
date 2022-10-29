import React from "react";
import { NavLink } from "react-router-dom";
import { MdSupport } from "react-icons/md";

export default function Card({comment}){
  const date = new Date(comment.created_at)

  return (
    <div
      className={`container-main issue-card card mb-2 p-3 ${comment.issue.status}`}
    >
      <p className="project-name">
        <MdSupport />
        <span className="px-3">
          <NavLink to="/issue/3">Issue #{comment.issue.id} </NavLink>
        </span>{" "}
        {comment.issue.status}
      </p>
      <p className="m-0 comment-message">{comment.message}</p>
      <div className="">
        <p className="float-right px-2">{date.toDateString()}</p>
      </div>
    </div>
  );
}