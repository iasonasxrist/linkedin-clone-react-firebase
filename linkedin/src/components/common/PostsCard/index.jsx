import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import "./index.scss";

export default function PostsCard(props) {
  let navigate = useNavigate();

  return (
    <div className="posts-card" key={props.id}>
      <div className="post-image-wrapper">
        <div className="action-container">
          <BsPencil size={20} className="action-icon" onClick={""} />
          <BsTrash size={20} className="action-icon" onClick={""} />
          <p>{props.posts.status}</p>
        </div>
      </div>
    </div>
  );
}
