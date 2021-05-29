const Item = require("../models/item.js")

exports.getItems = async (req, res) => {
    try {
      const items = await Item.find();
      return res.status(200).json(items);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

exports.getItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.findOne({ item_id: id })
        return res.status(200).json(item);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

exports.createItem = async (req, res) => {
    console.log(req.body)
    try {
        var images = JSON.parse(req.body.images);
        var sizes = JSON.parse(req.body.sizes);
        const item = new Item({
            item_id: req.body.item_id,
            name:  req.body.name,
            price:  req.body.price,
            images: images,
            sizes: sizes,
            description: req.body.description,
            discount: req.body.discount,
        });
  
      const createdItem = await item.save();
  
      return res.status(200).json(createdItem);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

exports.editItem = async (req, res) => {
    try {
    let id = req.body.item_id;
    var images = JSON.parse(req.body.images);
    var sizes = JSON.parse(req.body.sizes);
    const itemData = {
        item_id: req.body.item_id,
        name:  req.body.name,
        price:  req.body.price,
        images: images,
        sizes: sizes,
        description: req.body.description,
        discount: req.body.discount,
    };  
    const item = await Item.findOne({ item_id: id })
    item.updateData(itemData)
    return res.status(200).json(item);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
};

exports.removeItem = async (req, res) => {
    try {
    let id = req.body.item_id;
    await Item.deleteOne({ item_id: id })
    return res.status(200).json({ msg: "Xoa item thanh cong" });
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
};
