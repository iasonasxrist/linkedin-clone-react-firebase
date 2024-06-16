import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPencil, BsTrash } from "react-icons/bs";
import "./index.scss";

export default function PostsCard({ posts, id }) {
  let navigate = useNavigate();

  return (
    <div className="posts-card" key={id}>
      <div className="post-image-wrapper">
        <div className="action-container">
          <BsPencil size={20} className="action-icon" onClick={""} />
          <BsTrash size={20} className="action-icon" onClick={""} />
          <p>{posts.timeStamp}</p>
        </div>
      </div>
    </div>
  );
}
