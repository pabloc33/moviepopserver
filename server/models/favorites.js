import mongoose from "mongoose";
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
    },
    movieId: {
      type: String,
    },
    movie: {
      type: Object,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Favorite", favoriteSchema);
