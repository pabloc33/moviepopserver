import express from "express";
import {
  favoriteNumber,
  favorited,
  addToFavorite,
  removeFromFavorite,
  getFavoredMovie,
} from "../controllers/favorites.js";

const router = express.Router();

router.post("/favoriteNumber", favoriteNumber);
router.post("/favorited", favorited);
router.post("/addToFavorite", addToFavorite);
router.post("/removeFromFavorite", removeFromFavorite);
router.post("/getFavoredMovie", getFavoredMovie);

export default router;
