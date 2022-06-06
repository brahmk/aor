import { React, useEffect } from "react";

export default function MessageList({ messages }) {
  const imArray = [
    "wow",
    "cool",
    "im bored",
    "wanna ride bikes?",
    "why is there nothing good on tv",
    "hold on my mom needs to use the phone",
    "brb",
    "sup",
    "lol",
    "did you do the math homework?",
  ];

  function randomIm(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return (
    <>
      <div>
        {messages.map((item) => {
          const { message, id } = item;

          return (
            <div className="msgbox">
              <p className="msgbox" key={id}>
                <span className="screen-name">limpBizkit427:</span> {message}
              </p>
              {/* <p>
                <span className="screen-name2">skate_or_d1e:</span>{" "}
                {randomIm(imArray)}{" "}
              </p> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
