import React from 'react'
import {useParams} from "react-router-dom";
function Userp() {
const {userid}=useParams();
  return (
    <div>
      User: {userid}
    </div>
  )
}

export default Userp
