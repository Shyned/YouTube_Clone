import React, { useState } from "react";
import CommentList from "../Comments/CommentList";
import CommentForm from "../Comments/CommentForm";
const VideoPage = props => {
  const [comments, setComments] = useState("");
  function addNewComment(comment) {
    let composeComment = [comment, ...comments];
    setComments(composeComment);
  }
  return (
    <div>
      <CommentForm addNewComment={addNewComment} />
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/Y8Tko2YC5hA"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPage;
