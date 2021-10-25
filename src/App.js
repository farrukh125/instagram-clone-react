import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "farrukh",
      caption: "WOW it works",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "sheroze",
      caption: "DOPE",
      imageUrl:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
      <Post username="khalil" caption="This is fun project" />
      <Post username="jam" caption="interesting" />
    </div>
  );
}

export default App;
