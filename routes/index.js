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

router.get("/edit-item/:id", async (req, res) => {
  const { id } = req.params
  const item = await Item.findById(id)
  console.log(item)
  res.render("edit-item", { item })
})

router.patch("/edit-item/:id", async (req, res) => {
  try {
    const editedItem = req.body
    const { id } = req.params
    await Item.updateOne({ _id: id }, { ...editedItem })
    res.redirect("/items")
  } catch (err) {
    console.log(err)
  }
})
module.exports = router
