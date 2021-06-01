const Layout = require("../models/layout.js");

exports.getLayout = async (req, res) => {
    try {
    const layout = await Layout.findOne({})
    return res.status(200).json(layout);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
};

exports.updateLayout = async (req, res) => {
    try {
    const layout = await Layout.findOneAndUpdate({},req.body)
    return res.status(200).json(layout);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
};
