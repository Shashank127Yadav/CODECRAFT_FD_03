const express = require("express");
const router = express.Router();
const { createMessage } = require("../controllers/supportController");

router.post("/", createMessage);
module.exports = router;
