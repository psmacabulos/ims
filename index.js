const express = require("express")
const path = require("path")
const methodOverride = require("method-override")
const router = require("./routes/index")
const connectDB = require("./config/database")

const app = express()
const PORT = process.env.PORT || 3000

connectDB() // connect to the database

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride("_method"))
app.use("/", router)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
