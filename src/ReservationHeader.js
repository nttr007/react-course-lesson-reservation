
import React from "react"
import User from "./User"
import Header from "./Header"
import {useSelector} from "react-redux"


const ReservationHeader = ({ setUser, language}) => {
    const user = useSelector(state=> state.user);
    console.log (user)
    return (
      <Header>
         
        <User user={user} setUser={setUser} />
        <span>{language}</span>
      </Header>
    );
  };

  export default ReservationHeader