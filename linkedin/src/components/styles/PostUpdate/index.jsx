import React, { useMemo } from "react";
import { ModalComponent } from "../../common/Modal";
import { useState } from "react";
import { getStatus, postStatus } from "../../../api/FirestoreAPI";
import PostsCard from "../../common/PostsCard";
import "./index.scss";

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");

  const sendStatus = async (status) => {
    await postStatus(status);
    await setModalOpen(false);
    await setStatus("");
  };

  // caches all data from posts
  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  console.log(allStatuses);

  return (
    <>
      <div className="post-status-main">
        <div className="user-details">
          <img src="/user.png" alt="imageLink" />
          <p className="name"> Zisis Katsaros</p>
          <p className="headline"> Zisis Katsaros</p>
        </div>
        <div className="post-status">
          <img className="post-image" src="/user.png" alt="imageLink" />
          <button
            className="open-post-modal"
            onClick={() => setModalOpen(true)}
          >
            Start a Post
          </button>
        </div>
      </div>

      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sendStatus={sendStatus}
        isEdit={isEdit}
        // updateStatus={updateStatus}
        // uploadPostImage={uploadPostImage}
        postImage={postImage}
        setPostImage={setPostImage}
        setCurrentPost={setCurrentPost}
        currentPost={currentPost}
      />

      {allStatuses.map((posts) => {
        return <PostsCard id={posts.id} posts={posts} />;
      })}
    </>
  );
};

export default PostStatus;
