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
        var images = req.body.images;
        var sizes = req.body.sizes;
        const item = new Item({
            item_id: req.body.item_id,
            name:  req.body.name,
            price:  req.body.price,
            images: images,
            sizes: sizes,
            description: req.body.description,
            discount: req.body.discount,
            instock: req.body.instock,
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
    let id = req.body._id;
    var images = req.body.images;
    var sizes = req.body.sizes.split(",");
    const itemData = {
        item_id: req.body.item_id,
        name:  req.body.name,
        price:  req.body.price,
        images: images,
        sizes: sizes,
        description: req.body.description,
        discount: req.body.discount,
        instock: req.body.instock,
    };  
    const item = await Item.findByIdAndUpdate(id,itemData)
    return res.status(200).json(itemData);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
};

exports.removeItem = async (req, res) => {
    try {
    let id = req.body._id;
    await Item.findByIdAndRemove(id,(err,docs)=>{
      if (err) {
        console.log(err)
      } else {
        console.log(docs)
      }
    })
    return res.status(200).json({ msg: "Xoa item thanh cong" });
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
};
