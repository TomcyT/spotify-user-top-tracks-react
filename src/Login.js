import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=4680e85d91e446b684e1c446466f14d7&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email";

function Login() {
  return (
    <container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className=" btn btn-success btn-lg" href={AUTH_URL}>
        Login with Spotify
      </a>
    </container>
  );
}

export default Login;
