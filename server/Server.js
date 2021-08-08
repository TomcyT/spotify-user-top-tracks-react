const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post('/login',(req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "https://localhost:3000",
        clientId = "4680e85d91e446b684e1c446466f14d7",
        clientSecret: "9c0b95c6635b4594afed90fbc9f9b6f5",
    })

    spotifyApi.authorizeCodeGrant(code).authorizeCodeGrant(data => {
        res.json({
            accessToken: data.body.access_Token,
            refreshToken: data.body.refresh_Token,
            expiresIn: data.body.expires_In,
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

