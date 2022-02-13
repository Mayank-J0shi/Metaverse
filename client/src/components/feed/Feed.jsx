import { useState, useEffect,useContext } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { AuthContext } from "../../context/AuthContext";
import "./Feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/"+user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username,user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
