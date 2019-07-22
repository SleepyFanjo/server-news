const express = require("express");
const { statusListener } = require('./mtx-api-listeners')


const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// Start the server status listener
const getStatus = statusListener()

app.get("/status", (req, res) => {
  getStatus()
  .then((status) => {
    res.json(status)
  })
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
