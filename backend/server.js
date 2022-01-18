require("dotenv").config();
const express = require("express");

const path = require('path')
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const emailRoutes = require("./routes/emailRoutes");

connectDB();

const app = express();


app.use(express.json());


app.use("/api/products", productRoutes);
app.use(express.urlencoded());


app.use("/api/emails", emailRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
} else {
    app.get("/", (req, res) => {
        res.send("Api running");
    })
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
