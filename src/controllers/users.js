const { Users } = require("../models/index");
const bcrypt = require("bcrypt");
require("dotenv").config();

const secret_key = process.env.PASSWORD_SECRET;

async function createUser(req, res) {
  try {
    const hashPassword = await bcrypt.hash(secret_key + req.body.password, 10);
    req.body.password = hashPassword;
    const user = await Users.create(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
    