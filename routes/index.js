const express = require("express")
const router = express.Router()
const Item = require("../models/item")

// Show the landing page:
router.get("/", async (req, res) => {
  res.render("index")
})

// Show the products table:
router.get("/items", async (req, res) => {
  //   const items = await Item.find()
  //   res.render("items", { items })
  // })
  res.send("Hello you arrive correctly bro")
})
module.exports = router
