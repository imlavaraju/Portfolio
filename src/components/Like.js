import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import axios from "axios";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState("");
  const [submitText, setSubmitText] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      axios
        .post("http://localhost:3000/likes", { name, liked })
        .then((response) => {
          console.log(response.data);
          if (response.data.liked === true) {
            setName("");
            setLiked(false);
            setSubmitText(true);
          }
        })
        .catch((error) => {
          console.error("There was an error submitting the form!", error);
        });
    }
  };

  return (
    <div className="like-container">
      <span className="like-button" onClick={toggleLike}>
        {liked ? (
          <FcLike className="heart-icon" />
        ) : (
          <FcLikePlaceholder className="heart-icon" />
        )}
      </span>
      <form onSubmit={handleSubmit} className="like-form">
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />
        <button type="submit" className="submit-button">
          {submitText ? (
            <>
              Thanks for
              <FcLike style={{ alignItems: "center", marginLeft: "10px" }} />
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Like;
