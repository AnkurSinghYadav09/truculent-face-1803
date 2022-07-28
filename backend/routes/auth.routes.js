const { Router } = require("express");

const authRouter = Router();
const UserModel = require("../models/user");

//SIGN post
authRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = await new UserModel(req.body);
  user.save((err, success) => {
    if (err) {
      res.status(500).send({ message: "error occured" });
    }
    return res.status(201).send({ message: "sign up success", token: 54321 });
  });
  //   res.send("sign up successfully");
});

//LOGIN post
authRouter.post("/login", async (req, res) => {
  console.log(req.body);
  const checkUser = await UserModel.find(req.body);
  if (checkUser.length >= 1) {
    let { name, _id } = checkUser[0];
    let payload = {
      _id,
      name,
      token: 54321,
    };

    res.send(payload);
  } else {
    res.send({ message: "wrong credentials" });
  }
});

//get
authRouter.get("/login", (req, res) => {
  console.log(req.body);
  res.send("logged in successfully");
});

module.exports = authRouter;
