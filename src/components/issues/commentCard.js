import { useState } from "react";
import { useEffect } from "react";

export default function CommentCard(){
  const token = localStorage.getItem("jwt")

  const [comment, setComment] = useState('')
  useEffect(() => {
    fetch(`http://localhost:4000/comments/2`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => {
          setComment(r)
          console.log(r)
        })
      }
    })
  }, [token, setComment])

  const date = new Date(comment.created_at)

  return (
    <div className="container-main card mb-3 p-2  comment-card ">
      <div className="comment-header">
        <img src="./download.png" alt="nei" />{" "}
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