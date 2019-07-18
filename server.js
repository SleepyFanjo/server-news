const express = require("express");
const credentials = require('./credentials.json')
const request = require('request')
const { promisify } = require('util')

const rp = promisify(request)

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.get("/status", (req, res) => {
  getToken()
  .then((token) => {
    const { access_token } = token

    return rp(`https://mtxserv.com/api/v1/viewers/game?type=minecraft&ip=game-fr-10.mtxserv.com&port=27180&access_token=${access_token}`, { json: true })
  })
  .then(data => {
    console.log(data.body)
    return res.json(data.body)
  })
  .catch(err => {
    res.json({})
  })
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

const getToken = () => {
  const urlToken = 'https://mtxserv.com/oauth/v2/token';

  const query = {
    grant_type: 'https://mtxserv.com/grants/api_key',
    client_id: credentials.client_id,
    client_secret: credentials.client_secret,
    api_key: credentials.api_key
  }

  return rp(`${urlToken}?grant_type=${query.grant_type}&client_id=${query.client_id}&client_secret=${query.client_secret}&api_key=${query.api_key}`, {json: true})
  .then((res) => {
    return res.body
  })
}
