import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import MessageList from "./components/MessageList";
import useSound from "use-sound";
import welcome from "./Welcome.mp3";

function App() {
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [welcomeSound] = useSound(welcome, { volume: 1.0 });

  useEffect(() => {
    fetch("http://localhost:5050/messages")
      .then((res) => res.json())
      .then(setMessages)
      .then(console.log("FETTTCHHH"))

      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log("scroll effect!");
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
        <Chat setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;
