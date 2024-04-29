import User from "../../models/User.js";
import crypto from "crypto";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const controller = {
  sign_up: async (req, res, next) => {
    try {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
      await User.create(req.body);
      return res.status(200).json({ message: "User registered!" });
    } catch (error) {
      next(error);
    }
  },

  sign_in: async (req, res, next) => {
    try {
      let user = await User.findOneAndUpdate(
        { mail: req.user.mail },
        { is_online: true },
        { new: true }
      );
      user.password = null;
      const token = jsonwebtoken.sign({ id: user._id }, process.env.KSECRET, {
        expiresIn: 60 * 60 * 24,
      });
      return res.status(200).json({ token, user });
    } catch (error) {
      next(error);
    }
  },

  sign_out: async (req, res, next) => {
    console.log(req.user);
    const { mail } = req.user;
    try {
      await User.findOneAndUpdate(
        { mail },
        { is_online: false },
        { new: true }
      );
      return res.status(200).json({ message: "User offline!" });
    } catch (error) {
      next(error);
    }
  },

  token: async (req, res, next) => {
    const { user } = req;
    const token = jsonwebtoken.sign({ id: user._id }, process.env.KSECRET, {
      expiresIn: 60 * 60 * 24,
    });
    try {
      return res.status(200).json({ user, token });
    } catch (error) {
      next(error);
    }
  },
};

export default controller