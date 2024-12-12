const express = require("express")
const router = express.Router()
const ItemController = require("../controllers/itemController")

// Show the landing page
router.get("/", (req, res) => {
  res.render("index")
})

// Show the items table
router.get("/items", ItemController.showItems)

// Add item table
router.get("/add-item", ItemController.showAddItemForm)

// Add a new item
router.post("/add-item", ItemController.addItem)

// Edit item form
router.get("/edit-item/:id", ItemController.showEditItemForm)

// Update an item
router.patch("/edit-item/:id", ItemController.updateItem)

// Delete an item
router.delete("/delete-item/:id", ItemController.deleteItem)

module.exports = router
