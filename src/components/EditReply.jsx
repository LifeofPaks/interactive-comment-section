import React, { useEffect } from "react";

const EditReply = ({ editReplyContent, setEditReplyContent, replies }) => {

  return (
    <div className="editReply">
      <textarea
        type="text"
        placeholder="Add a comment..."
      />
      <button>Update</button>
    </div>
  );
};

export default EditReply;
