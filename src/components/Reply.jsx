import React from "react";
import Avatar from "../assets/images/avatars/image-juliusomo.png"

const Reply = () => {
  return (
    <div className="myComment myReply">
      <img src={Avatar} alt="avatar" />
      <textarea type="text" placeholder="Add a comment..." />
      <button>Reply</button>
    </div>
  );
};

export default Reply;
