import { React, useEffect } from "react";

export default function MessageList({ messages }) {
  return (
    <>
      <div>
        {messages.map((item) => {
          const { message, id, response } = item;

          return (
            <div className="msgbox">
              <p className="msgbox" key={id}>
                <span className="screen-name">limpBizkit427: </span> {message}
              </p>
              <p>
                <span className="screen-name2">sk8_0r_d1e: </span>
                {response}
              </p>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}
