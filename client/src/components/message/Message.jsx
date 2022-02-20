import React from "react";
import "./message.css";

export default function Message({own}) {
  return (
    <div className={own ? "message own": "message"}>
      <div className="messageTop">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="messageImg"
        />
        <p className="messageText">Hello this is  a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
