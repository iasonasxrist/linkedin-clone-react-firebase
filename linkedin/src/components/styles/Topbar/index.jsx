import React from 'react'
import {
    AiOutlineHome,
    AiOutlineUserSwitch,
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineBell,
  } from "react-icons/ai";
import Linkedin from "../../../assets/linkedinLogo.png"
import user from "../../../assets/user.png"
import "./index.scss";
import { Route, useNavigate } from 'react-router-dom';
export default function Topbar() {

    // states
    // searchInput 
    // filterUSer
    // popup


    // const handleSearch = () => {
    //     if (searchInput !== "") {
    //       let searched = users.filter((user) => {
    //         return Object.values(user)
    //           .join("")
    //           .toLowerCase()
    //           .includes(searchInput.toLowerCase());
    //       });
    
    //     //   setFilteredUsers(searched);
    //     } else {
    //     //   setFilteredUsers(users);
    //     }
    //   };
    let navigate = useNavigate();
    const goToRoute = (route) =>{
      navigate(route)
    }

  return (
    <div className='topbar-main'>
        <img src={Linkedin} height= "65px" 
        className="linkedinLogo" />
        {/* Profile image */}
        <div className='react-icons'>
          <AiOutlineSearch size={30} className="react-icon"/>
          <AiOutlineHome size={30} className="react-icon" onClick={() => {goToRoute("/home")}}/>
          <AiOutlineUserSwitch size={30} className="react-icon" onClick={() => {goToRoute("/profile")}}/>
          <AiOutlineMessage size={30} className="react-icon"/>
          <AiOutlineBell size={30} className="react-icon"/>
        </div>
        <img src={user} className="user-logo"/>

        {/* Search Users
        
        filtering 
        */}
        




    </div>
  )
}

