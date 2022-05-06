import axios from "axios";
import React, { useState } from "react";

const CommentForm = props => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [videoId, setVideoId] = useState("");
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let newComment = {
      comment: comment,
    };
    console.log(newComment);
    props.addNewComment(newComment);
  }

  //   axios.post('/comments',{
  //     user: 3,
  //     video_id:"gogle",
  //     text:"hello",
  //     likes: 2,
  //     dislikes: 1
  //   })
  //   .then(function (response){
  //       console.log(response);
  //   }).catch(function (error){
  //       console.log(error)
  //   })
  // }
  // //   function addNewComment(comment) {
  // //     let composeComment = [comment, ...comments];
  // //     setComments(composeComment);
  // function onChange(e) {
  // let newComment = e.target.value;
  // setComment(newComment);
  // }
  //   function addNewComment(comment) {
  //     let composeComment = [comment, ...comments];
  //     setComments(composeComment);

  axios
    .post("/comments", {
      user: 3,
      videoId: "gogle",
      text: "hello",
      likes: 2,
      dislikes: 1,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  function onChange(e) {
    let newComment = e.target.value;
    setComment(newComment);
  }

  return (
    <div>
      <form className="comment-area" onSubmit={handleSubmit}>
        <div>
          <input
            className="user-input"
            type="text"
            placeholder="user"
            user={user}
            onChange={e => setUser(e.target.value)}
          ></input>
          <input
            className="video_id-input"
            type="text"
            placeholder="video_id"
            videoId={videoId}
            onChange={e => setVideoId(e.target.value)}
          ></input>
          <input
            className="comment-input"
            type="text"
            placeholder="Comment"
            comment={comment}
            onChange={onChange}
          ></input>
          <input
            className="likes-input"
            type="text"
            placeholder="likes"
            comment={likes}
            onChange={e => setLikes(e.target.value)}
          ></input>
          <input
            className="dislikes-input"
            type="text"
            placeholder="dislikes"
            dislikes={dislikes}
            onChange={e => setDislikes(e.target.value)}
          ></input>
          <button className="btn" type="submit">
            comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
