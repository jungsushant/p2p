"use client";
import { useEffect } from "react";
// import { socket } from "./src/socket";
import SimplePeer from "simple-peer";
export default function Home() {
  console.log("Running in browser");
  useEffect(() => {
    console.log("Running in browser");
    const p = new SimplePeer({
      initiator: true,
    });
    p.on("signal", (data) => {
      console.log("Signal data:", JSON.stringify(data));
    });
    // ... rest of your peer connection logic
  }, []);

  return (
    <div>
      <h1>Browser WebRTC Test</h1>
    </div>
  );
}
