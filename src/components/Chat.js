import { React, useState, DateTime } from "react";
import useSound from "use-sound";
import im from "../imsend.wav";

import "../App.css";
//import { datetimeString } from "firebase-tools/lib/utils";

export default function Chat() {
  const [newMessage, setNewMessage] = useState({ message: "" });

  const [playSound] = useSound(im, { volume: 1.0 });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://chat-app-api-bk.web.app/messages/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
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

//   return (
//     <>
//       <p></p>
//       <Form className="chat-input" onSubmit={handleSubmit}>
//         <Form.Item
//           name="messageBox"
//           value={newMessage.message}
//           onChange={handleChange}
//           rules={[{ required: true, message: "enter a message" }]}
//         >
//           <Input className="message-input"></Input>
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" onClick={handleSubmit} htmlType="submit">
//             send
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// }
