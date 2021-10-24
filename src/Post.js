import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__header"></div>
      <Avatar
        className="post__Avater"
        alt="Farrukh"
        src="/static/images/avatar/1.jpg"
      />
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />
      {/* image */}

      <h4 className="post__text">
        <strong>Username</strong> caption
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
