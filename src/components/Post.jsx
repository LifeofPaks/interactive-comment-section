import React from "react";
import ReplyIcon from "../assets/images/icon-reply.svg";
import Reply from "./Reply";
import ReplyComments from "./ReplyComments";

const Post = ({ comments, addVote, removeVote, handleReply, replyComment }) => {
  return (
    <>
      {comments?.map((data) => (
        <div className="container" key={data.id}>
          <div className="comment">
            <div className="rankWrapper desktop">
              <button onClick={data.vote ? () => addVote(data.id) : () => {}}>
                +
              </button>
              <span>{data.score}</span>
              <button
                onClick={data.vote ? () => removeVote(data.id) : () => {}}
              >
                -
              </button>
            </div>

            <div className="commentWrapper">
              <div className="top">
                <div className="profile">
                  <img src={data.image} className="avatar" />
                  <p className="name">{data.username}</p>
                  <p className="createdAt">{data.createdAt}</p>
                </div>

                <div
                  className="replyWrapper"
                  onClick={() => handleReply(data.id)}
                >
                  <img src={ReplyIcon} alt="reply" className="reply" />
                  <span>Reply</span>
                </div>
              </div>

              <div className="bottom">
                <p className="commentText">{data.content}</p>
              </div>

              {/* MOBILE LAYOUT */}
              <div className="mobileAction">
                <div className="rankWrapper">
                  <button
                    onClick={data.vote ? () => addVote(data.id) : () => {}}
                  >
                    +
                  </button>
                  <span>{data.score}</span>
                  <button
                    onClick={data.vote ? () => removeVote(data.id) : () => {}}
                  >
                    -
                  </button>
                </div>

                <div
                  className="replyWrapper"
                  onClick={() => handleReply(data.id)}
                >
                  <img src={ReplyIcon} alt="reply" className="reply" />
                  <span>Reply</span>
                </div>
              </div>
            </div>
          </div>
          {data.replyThis && <ReplyComments />}
        </div>
      ))}
    </>
  );
};

export default Post;
