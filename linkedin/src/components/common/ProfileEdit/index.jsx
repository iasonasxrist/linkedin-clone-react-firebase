import React, { useState } from "react";
import "./index.scss";
import { editProfile } from "../../../api/FirestoreAPI";
import { AiOutlineClose } from "react-icons/ai";

export const ProfileEdit = ({ onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };
  return (
    <div className="profile-card">
      <div className="edit-btn">
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="profile-edit-inputs">
        <label>Name</label>
        <input
          onChange={getInput}
          name="name"
          placeholder="Please update your name"
          className="common-input"
        />
        <label>E-mail</label>
        <input
          onChange={getInput}
          email="email"
          placeholder="Please update your email"
          className="common-input"
        />
        <label>Password</label>
        <input
          onChange={getInput}
          password="password"
          placeholder="Please update your password"
          className="common-input"
        />
        <label>Country</label>
        <input
          onChange={getInput}
          country="country"
          placeholder="Please update your country"
          className="common-input"
        />
        <label>City</label>
        <input
          onChange={getInput}
          city="city"
          placeholder="Please update your city"
          className="common-input"
        />
        <label>Company</label>
        <input
          onChange={getInput}
          company="company"
          placeholder="Please update your company"
          className="common-input"
        />
        <label>Industry</label>
        <input
          onChange={getInput}
          industry="industry"
          placeholder="Please update your industry"
          className="common-input"
        />
        <label>College</label>
        <input
          onChange={getInput}
          college="college"
          placeholder="Please update your college"
          className="common-input"
        />
        <label>About</label>
        <input
          onChange={getInput}
          about="about"
          placeholder="Please update your about"
          className="common-input"
        />
        <label>Website</label>
        <input
          onChange={getInput}
          website="website"
          placeholder="Please update your website"
          className="common-input"
        />
      </div>
      <div className="save-container">
        <button className="save-btn" onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
};
