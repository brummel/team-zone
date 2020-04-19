import express from "express";
import User from "../models/users";

const create = (prefix) => {
  const router = express.Router();

  router
    .route(prefix)
    .get(async (req, res) => {
      const users = await User.find();
      res.send(users);
    })
    .post(async (req, res) => {
      console.log(req.body);
      const user = await User.create(req.body);
      return res.send(user);
    });

  return router;
};

export default create("/users");
