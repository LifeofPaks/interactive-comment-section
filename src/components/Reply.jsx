import React from "react";
import Avatar from "../assets/images/avatars/image-juliusomo.png"

const Reply = () => {
  return (
    <div className="myComment myReply">
      <img src={Avatar} alt="avatar" className="dImg"/>
      <textarea type="text" placeholder="Add a comment..." />
      <button className="dBtn">Reply</button>

      <div className="mobileLayout">
      <img src={Avatar} alt="avatar" />
      <button>Reply</button>
      </div>
    </div>
  );
};

export default Reply;
