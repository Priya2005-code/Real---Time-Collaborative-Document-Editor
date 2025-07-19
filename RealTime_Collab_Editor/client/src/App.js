import React, { useEffect } from "react";
import socket from "./socket";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    // Send a message to server
    socket.emit("send-changes", { data: "Hello from client" });

    // Receive message from server
    socket.on("receive-changes", (delta) => {
      console.log("Received changes:", delta);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Collaborative Editor</h1>
    </div>
  );
}

export default App;
