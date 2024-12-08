const express = require("express")
const router = express.Router()
const Item = require("../models/item")

// Show the landing page:
router.get("/", async (req, res) => {
  res.render("index")
})

// Show the items table:
router.get("/items", async (req, res) => {
  const items = await Item.find()

  res.render("items", { items })
})

// Add item table:
router.get("/add-item", async (req, res) => {
  res.render("add-item")
})

router.post("/add-item", async (req, res) => {
  try {
    const newItem = new Item({ ...req.body })
    await newItem.save()
    res.redirect("/items")
  } catch (err) {
    console.log(err)
    res.status(500).send("Server Error")
  }
})

module.exports = router
