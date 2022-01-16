require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const emailRoutes = require("./routes/emailRoutes");

connectDB();

const app = express();
var cors = require("cors");

app.use(express.json());


app.use("/api/products", productRoutes);
app.use(express.urlencoded());


app.use("/api/emails", emailRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
