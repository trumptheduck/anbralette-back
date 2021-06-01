const User = require("../models/user");
const jwt = require("jsonwebtoken");
const accessTokenKey = "this_is_key_for_development";

exports.adminSignup = async (req, res) => {
  try {
    const user = new User({
      email: "anbralette.admin@gmail.com",
    });
    user.generatePassword();
    const admin = await user.save().then(
      (user) => {
        return res.status(200).json({ msg: "OK" });
      },
      (err) => {
        console.log(err);
        return res.status(500).json({ msg: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: "Đã xảy ra lỗi" });
  }
};

exports.adminLogin = async (req, res) => {

  if (!req.body.email) return res.status(422).json({ msg: "Hãy nhập Email" });
  if (!req.body.password)
    return res.status(422).errjson({ msg: "Hãy điền mật khẩu" });

  const user = await User.findOne({ email: req.body.email }).catch((err) => {
    return res.status(500);
  });
  if (!user.checkValidPassword(req.body.password)) {
    return res.status(401).json({ msg: "Mật khẩu/Email không đúng" });
  }
  const jwtToken = user.generateJWT();

  return res.status(200).json({
    user: user,
    token: jwtToken,
  });
};

exports.adminAutoLogin = async (req, res) => {
  const jwtToken = req.body.token;

  if (!jwt) {
    return res.status(401).json({ msg: "Khong tim thay tai khoan" });
  }

  const decodedToken = jwt.decode(jwtToken, accessTokenKey);

  User.findOne({ _id: decodedToken.userId }).exec((err, user) => {
    if (err) {
      return res.status(401).json({ msg: "Không tìm thấy tài khoản" });
    }

    if (user) {
      return res.status(200).json(user);
    }
  });
};


exports.verifyIdentity = async (req, res, next) => {
  const jwtToken = req.params.token;

  if (!jwt) {
    return res.send("Access Denied!")
  }

  const decodedToken = jwt.decode(jwtToken, accessTokenKey);

  User.findOne({ _id: decodedToken.userId }).exec((err, user) => {
    if (err) {
      return res.send("Access Denied!")
    }
    if (user) {
      next()
    }
  });
};
