import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI);
  console.log("connection successful");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/user", userRoute);
app.use("/", contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
