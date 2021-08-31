import React from "react";
import Sidebar from "./Sidebar";
import Chat from './Chat'
import "./Telegram.css";

const Telegram = () => {
  return (
    <div className="telegram">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Telegram;
