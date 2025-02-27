import React, { Component } from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from 'react-dom/client'
import Homepage from './Homepage'; // Import Homepage component
import CreateRoomPage from './CreateRoomPage'; // Import CreateRoomPage component
import RoomJoinPage from './RoomJoinPage'; // Import RoomJoinPage component

// Define the App component
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Homepage />
        <CreateRoomPage />
        <RoomJoinPage />
      </div>
    );
  }
}

// Get the app div where the app will be rendered
const appDiv = document.getElementById("app");

// Create the root element and render the App component
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
