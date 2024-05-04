import React from "react";

function UserCard({ avatar, firstName, lastName, email }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text text-center">{firstName + " " + lastName}</p>
        <p className="card-text text-center">{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
