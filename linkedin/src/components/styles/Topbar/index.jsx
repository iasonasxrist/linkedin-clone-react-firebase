import React from 'react'
import {
    AiOutlineHome,
    AiOutlineUserSwitch,
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineBell,
  } from "react-icons/ai";
import "./index.scss";

export const index = () => {

    // states
    // searchInput 
    // filterUSer
    // popup


    const handleSearch = () => {
        if (searchInput !== "") {
          let searched = users.filter((user) => {
            return Object.values(user)
              .join("")
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          });
    
        //   setFilteredUsers(searched);
        } else {
        //   setFilteredUsers(users);
        }
      };
      
  return (
    <div>

        {/* Profile image */}

        {/* Search Users
        
        filtering 
        */}





    </div>
  )
}
