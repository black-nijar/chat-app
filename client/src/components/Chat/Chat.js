import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const END_POINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(END_POINT)
    console.log(socket)
    socket.emit('join', {name, room})
  },[END_POINT, location.search]);
  return <div>Chat</div>;
};

export default Chat;
