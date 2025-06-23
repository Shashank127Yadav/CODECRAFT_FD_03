const SupportMessage = require("../models/SupportMessage");

exports.createMessage = async (req, res) => {
  const msg = new SupportMessage(req.body);
  await msg.save();
  res.status(201).json({ msg: "Support request received" });
};
