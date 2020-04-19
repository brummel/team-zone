import express from "express";
import User from "../models/users";

const create = (prefix) => {
  const router = express.Router();

  router
    .route(prefix)
    .get((req, res) => {
      return res.send("User data");
    })
    .post(async (req, res) => {
      console.log(req.body);
      const user = await User.create(req.body);
      return res.send(user);
    });

  return router;
};

export default create("/users");
