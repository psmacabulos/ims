const mongoose = require("mongoose")
const Item = require("../models/item")
const items = require("./seed")

const seedDB = async () => {
  const empty = await Item.countDocuments()
  if (empty === 0) {
    await Item.insertMany(items)
    console.log("Database seeded successfully")
  } else {
    console.log("Database is not empty, seeding not needed")
  }
}
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/inventory")
    console.log("Connected to MongoDB ")
    await seedDB()
  } catch (err) {
    console.log("Failed to connect to MongoDB", err)
  }
}

module.exports = connectDB
