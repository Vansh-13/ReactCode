import React from 'react'

function Card({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Profession: {user.profession}</p>
    </div>
  )
}

export default Card
