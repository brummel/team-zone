import express from "express";

const app = express();
const port = 8080;

app.route("/users").get((req, res) => {
  return res.send("User data");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
