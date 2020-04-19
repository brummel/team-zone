import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UsersRooter from "./routers/users";

const app = express();
const port = 8080;
const dbUri = "mongodb://localhost:27017/team-zone";

let server = null;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", UsersRooter);

const start = async (callback) => {
  console.log(`Connecting to database at: ${dbUri}`);
  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
  });
  console.log("Connected.");

  console.log("Starting web server...");
  server = await app.listen(port);
  console.log(`Web server started. Listening on port ${port}`);

  callback();
};

const stop = async (callback) => {
  console.log("Stopping web server...");
  await server.close();
  console.log("Web server stopped.");
  console.log(`Disconnecting from database at: ${dbUri}`);
  await mongoose.connection.close();
  console.log("Disconnected.");

  callback();
};

export { app, stop, start };