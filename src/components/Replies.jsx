import React from "react";
import ReplyIcon from "../assets/images/icon-reply.svg";
import Reply from "./Reply";
import EditReply from "./EditReply";

const Replies = ({ replies, addVote, removeVote, handleReReply, deleteMyReply, handleEdit, edit }) => {

  return (
    <div className="replies">
      {replies?.map((reply) => (
        <div className="container" key={reply.id}>
          <div className="comment">
            <div className="rankWrapper">
              <button onClick={reply.vote ? () => addVote(reply.id) : () => {}}>
                +
              </button>
              <span>{reply.score}</span>
              <button
                onClick={reply.vote ? () => removeVote(reply.id) : () => {}}
              >
                -
              </button>
            </div>

            <div className="commentWrapper">
              <div className="top">
                <div className="profile">
                  <img src={reply.image} alt="avatar" className="avatar" />
                  <p className="name">
                    {reply.username}
                    {reply.currentUser && (
                      <span className="currentUser">you</span>
                    )}
                  </p>

                  <p className="createdAt">{reply.createdAt}</p>
                </div>

                {reply.action ? (
                  <div className="actions">
                    <div className=" action" onClick={()=>deleteMyReply(reply.id)}>
                      <img
                        src="https://img.icons8.com/material-rounded/48/F60000/filled-trash.png"
                        alt="filled-trash"
                      />
                      <span className="delete">Delete</span>
                    </div>

                    <div className="action" onClick={()=>handleEdit(reply.id)}>
                      <img
                        src="https://img.icons8.com/fluency-systems-filled/48/5457b6/edit.png"
                        alt="edit"
                      />
                      <span>Edit</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="replyWrapper"
                    onClick={() => handleReReply(reply.id)}
                  >
                    <img src={ReplyIcon} alt="reply" className="reply" />
                    <span>Reply</span>
                  </div>
                )}
              </div>

              <div className="bottom">
                { reply.editThis && 
                  edit ? <EditReply/> :
                  <p className="commentText">
                  <span>@{reply.replyingTo}</span>
                  {reply.content}
                </p>
                }
              
              </div>
            </div>
          </div>
          {reply.replyThis && <Reply />}
        </div>
      ))}
    </div>
  );
};

export default Replies;
