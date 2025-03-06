import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material"; // Material UI v5+
import { Link, useNavigate } from "react-router-dom"; // useNavigate for routing

const RoomJoinPage = () => {
  const [roomCode, setRoomCode] = useState("");  // State for room code
  const [error, setError] = useState(""); // State for error
  const navigate = useNavigate();  // React Router's useNavigate hook

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value);  // Update the room code state
  };

  const roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: roomCode }), // Send room code to backend
    };

    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${roomCode}`);  // Navigate to the room page using `useNavigate`
        } else {
          setError("Room not found.");  // Set error message
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <TextField
          error={!!error}  // Check if there's an error
          label="Code"
          placeholder="Enter a Room Code"
          value={roomCode}
          helperText={error}
          variant="outlined"
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={roomButtonPressed}
        >
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoomJoinPage;
