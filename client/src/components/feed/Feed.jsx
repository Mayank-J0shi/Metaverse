import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import axios from "axios";

export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("posts/timeline/61f972dbf13ec3c5ea152c12");
      setPosts(res.data);
    }
    fetchPosts();
  },[]);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}