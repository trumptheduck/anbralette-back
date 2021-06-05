const User = require("../models/user");
const jwt = require("jsonwebtoken");
const accessTokenKey = "this_is_key_for_development";

module.exports = async (req, res, next) => {
    const jwtToken = req.query.token;
  
    if (!jwt||jwtToken===null||jwtToken===undefined) {
      return res.send("Access Denied!")
    }
    const decodedToken = jwt.decode(jwtToken, accessTokenKey);
    if (decodedToken === null) {
        return res.send("Access Denied!")
    }
  
    User.findOne({ _id: decodedToken?.userId }).exec((err, user) => {
      if (err) {
        return res.send("Access Denied!")
      }
      if (user) {
        next()
      }
    });
  };
