import React from "react";
import "./conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      ></img>
      <span className="conversationName">Chat member</span>
    </div>
  );
}
