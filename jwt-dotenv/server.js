const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
//const errorHandler  = require("./middleware/errorMiddleware");

require("dotenv").config();

const app = express();

//middleware
app.use(bodyParser.json());

//connect to mongoDB
connectDB();

//Routes
app.use("/api/users", authRoutes);

//app.use(errorHandler);

const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});