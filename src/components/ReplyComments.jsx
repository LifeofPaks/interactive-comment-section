import React from "react";
import Avatar from "../assets/images/avatars/image-juliusomo.png"

const ReplyComments = () => {
  return (
    <div className="myComment">
      <img src={Avatar} alt="avatar" />
      <textarea type="text" placeholder="Add a comment..." />
      <button>Send</button>
    </div>
  );
};

export default ReplyComments;
