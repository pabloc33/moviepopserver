import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRotes from "./routes/users.js";
import favoriteRotes from "./routes/favorites.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/users", userRotes);
app.use("/favorites", favoriteRotes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => {
    console.log(err);
  });
