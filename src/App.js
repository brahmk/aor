import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import MessageList from "./components/MessageList";
import useSound from "use-sound";
import welcome from "./Welcome.mp3";

function App() {
  const [messages, setMessages] = useState([]);
  const [welcomeSound] = useSound(welcome, { volume: 1.0 });

  useEffect(() => {
    fetch("https://chat-app-api-bk.web.app/messages")
      .then((res) => res.json())
      .then(setMessages)

      .catch(console.error);
  }, [messages]);

  useEffect(() => {
    document.querySelector(".scrollbox").scrollTop =
      document.querySelector(".scrollbox").scrollHeight;
  }, [messages]);

  // useEffect(() => {
  //   welcomeSound();
  // }, []);

  useEffect(welcomeSound, []);

  return (
    <div className="App">
      <div className="window">
        <MessageList messages={messages} />
        <Chat />
      </div>
    </div>
  );
}

export default App;
