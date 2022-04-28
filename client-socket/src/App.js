import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

const { io } = require("socket.io-client");

function App() {
  useEffect(() => {
    (async () => {
      try {
        const socket = io("http://localhost:5000",{
          withCredentials: true,
        });
        console.log(socket)
        socket.on("connect", () => {
          console.log(socket.id);
          socket.emit("hello", "world");
        });
      } catch (error) {
        console.log("error")
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
