import { useEffect, useState } from "react";
import "./App.scss";
import Comment from "./components/Comment";
import Post from "./components/Post";
import { commentsData } from "./Data/Data";
import { repliesData } from "./Data/Data";
import Replies from "./components/Replies";

function App() {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [replyComment, setReplyComment] = useState(false);
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    setComments(commentsData);
    setReplies(repliesData);
  }, [commentsData, repliesData]);


  const addVote = (id) => {
    setReplies((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, score: item.score + 1 } : item
      )
    );

    setComments((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, score: item.score + 1 } : item
      )
    );
  };

  const removeVote = (id) => {
    setReplies((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, score: item.score - 1 } : item
      )
    );

    setComments((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, score: item.score - 1 } : item
      )
    );
  };

  const handleReply = (id) => {
    setReplyComment(!replyComment);

    setComments((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, replyThis: true } : item
      )
    );
  };

  const handleReReply = (id) => {
    setReplies((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, replyThis: true } : item
      )
    );
  };

  const deleteMyReply = (id) => {
    setReplies((items) => items?.filter((item) => item.id !== id));
  };

  const handleEdit = (id) =>{
    setEdit(true)
    setReplies((items) =>
    items?.map((item) =>
      item.id === id ? { ...item, editThis: true } : item
    )
  );

  }

  return (
    <div className="App">
      <Post
        comments={comments}
        addVote={addVote}
        removeVote={removeVote}
        handleReply={handleReply}
        replyComment={replyComment}
      />

      <Replies
        replies={replies}
        addVote={addVote}
        removeVote={removeVote}
        handleReReply={handleReReply}
        replyComment={replyComment}
        deleteMyReply={deleteMyReply}
        handleEdit={handleEdit}
        edit={edit}
      />
      <Comment />
    </div>
  );
}

export default App;
