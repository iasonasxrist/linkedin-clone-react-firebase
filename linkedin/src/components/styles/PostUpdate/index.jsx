import React, { useMemo } from "react";
import { ModalComponent } from "../../common/Modal";
import { useState } from "react";
import { getStatus, postStatus } from "../../../api/FirestoreAPI";
import PostsCard from "../../common/PostsCard";
import { getCurrentTimeStamp } from "../../../helper/useMoment";
import "./index.scss";

const PostStatus = () => {
  let userEmail = localStorage.getItem("userEmail");

  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      // postImage: postImage,
      userEmail: userEmail,
      // postID: getUniqueId(),
      // userID: currentUser.id,
    };

    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  // caches all data from posts
  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  console.log("my status", allStatus);
  console.log("0", status);
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
        status={status}
        setStatus={setStatus}
        sendStatus={sendStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        isEdit={isEdit}
        // updateStatus={updateStatus}
        // uploadPostImage={uploadPostImage}
        postImage={postImage}
        setPostImage={setPostImage}
        setCurrentPost={setCurrentPost}
        currentPost={currentPost}
      />

      {allStatus.map((post) => {
        return (
          <div key={post.id}>
            <PostsCard posts={post} />
          </div>
        );
      })}
    </>
  );
};

export default PostStatus;
