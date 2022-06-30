import { React, useState, DateTime } from "react";
import useSound from "use-sound";
import im from "../imsend.wav";

import "../App.css";

export default function Chat({ setMessages }) {
  const [newMessage, setNewMessage] = useState({ message: "" });

  const [playSound] = useSound(im, { volume: 1.0 });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5050/messages/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then(setMessages)
      .then(setNewMessage({ message: "" }), playSound())
      .catch(console.error);
  };

  const handleChange = (e) => {
    setNewMessage({ message: e.target.value });
  };

  return (
    <>
      <p></p>
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          name="messageBox"
          autoFocus="autofocus"
          value={newMessage.message}
          onChange={handleChange}
          className="message-input"
          autoComplete="off"
        ></input>

        <button className="send-button" type="submit" onClick={handleSubmit}>
          send
        </button>
      </form>
    </>
  );
}
