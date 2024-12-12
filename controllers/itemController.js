const Item = require("../models/item")

// Show the items table
const showItems = async (req, res) => {
  try {
    const items = await Item.find()
    res.render("items", { items })
  } catch (err) {
    console.error(err)
    res.status(500).send("Server Error")
  }
}

// Show one item
const viewItem = async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    res.render("view-item", { item })
  } catch (err) {
    console.error(err)
    res.status(500).send("Server Error")
  }
}

// Add item table
const showAddItemForm = (req, res) => {
  res.render("add-item")
}

// Add a new item
const addItem = async (req, res) => {
  try {
    const newItem = new Item({ ...req.body })
    await newItem.save()
    res.redirect("/items")
  } catch (err) {
    console.error(err)
    res.status(500).send("Server Error")
  }
}

// Edit item form
const showEditItemForm = async (req, res) => {
  try {
    const { id } = req.params
    const item = await Item.findById(id)
    res.render("edit-item", { item })
  } catch (err) {
    console.error(err)
    res.status(500).send("Server Error")
  }
}

// Update an item
const updateItem = async (req, res) => {
  try {
    const { id } = req.params
    const editedItem = req.body
    await Item.updateOne({ _id: id }, { ...editedItem })
    res.redirect("/items")
  } catch (err) {
    console.error(err)
    res.status(500).send("Server Error")
  }
}

// Delete an item
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    await Item.findByIdAndDelete(id)
    res.redirect("/items")
  } catch (err) {
    console.error(err)
    res.status(500).send("Server Error")
  }
}

module.exports = {
  showItems,
  viewItem,
  showAddItemForm,
  addItem,
  showEditItemForm,
  updateItem,
  deleteItem,
}
