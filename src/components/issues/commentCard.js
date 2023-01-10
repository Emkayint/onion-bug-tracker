import { useState } from "react";
import { useEffect } from "react";

import image from "./download.png"

export default function CommentCard({id}){
  const token = localStorage.getItem("jwt")

  const [comment, setComment] = useState('')
  useEffect(() => {
    fetch(`https://tracker-production.up.railway.app/comments/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => {
          setComment(r)
        })
      }
    })
  }, [token, setComment, id])

  const date = new Date(comment.created_at)

  return (
    <div className="container-main card mb-3 p-2  comment-card ">
      <div className="comment-header">
        <img src={image} alt="nei" />{" "}
        <span className="comment-user px-2">
          {comment ? comment.user.username : ""}
        </span>
        <span className="date-comment"></span>
      </div>
      <div className="text-comment pl-5">{comment.message}</div>

      <div className="date-created">
        <span> {date ? date.toDateString() : ""}</span>
        <i className="span px-3">&#x270D;</i>
      </div>
    </div>
  );
}