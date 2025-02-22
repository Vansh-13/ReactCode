import React,{useContext}from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user}=useContext(UserContext);

  if(!user){
    return <div>please login</div>
  }else{
    return(
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.password}</p>
            </div>
       
        )
  }
}

export default Profile
