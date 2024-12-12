const mongoose = require("mongoose")
const Item = require("../models/item")
const items = require("./seed")
const dotenv = require("dotenv")

// Load environment variables
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
} else {
  dotenv.config({ path: ".env.production" })
}

// Debugging: Log the MongoDB URI to ensure it's loaded
console.log("MONGODB_URI:", process.env.MONGODB_URI)

const seedDB = async () => {
  const count = await Item.countDocuments()
  if (count === 0) {
    await Item.insertMany(items)
    console.log("Database seeded successfully")
  } else {
    console.log("Database is not empty, seeding not needed")
  }
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    await seedDB()
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to the database")
    })
    mongoose.connection.on("error", (err) => {
      console.log("Mongoose connection error:", err)
    })
    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected")
    })
  } catch (err) {
    console.log("Failed to connect to MongoDB", err)
  }
}

module.exports = connectDB
