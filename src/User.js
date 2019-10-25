import React from "react"
import LoginForm from "./LoginForm"


const User = ({user, setUser}) => {
    if (user) {
      return <span>{user.name}</span>;
    }
  
    return <LoginForm setUser={setUser} />;
  };

  export default User