import React from "react";
import Avatar from "../assets/images/avatars/image-juliusomo.png"

const ReplyComments = () => {
  return (
    <div className="myComment">
      <img src={Avatar} alt="avatar" className="dImg"/>
      <textarea type="text" placeholder="Add a comment..." />
      <button className="dBtn">Send</button>

      <div className="mobileLayout">
      <img src={Avatar} alt="avatar" />
      <button>Send</button>
      </div>
    </div>
  );
};

export default ReplyComments;
