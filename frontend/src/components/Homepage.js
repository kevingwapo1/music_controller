import React, { Component } from "react";
import CreateRoomPage from './CreateRoomPage'; // Import CreateRoomPage component
import RoomJoinPage from './RoomJoinPage'; // Import RoomJoinPage component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Room from './Room';

// Define the Homepage component
export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<p>This is the homepage</p>} />
            <Route path="/join" element={<RoomJoinPage />} />
            <Route path="/create" element={<CreateRoomPage />} />
            <Route path="/room/:roomCode" element={<Room />} />
          </Routes>
      </Router>
    );
  }
}
