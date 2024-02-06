const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/items.controller");

router.get("/items", itemControllers.browse);

router.get("/items/:id", itemControllers.read);

router.post("/items", itemControllers.add);

module.exports = router;
