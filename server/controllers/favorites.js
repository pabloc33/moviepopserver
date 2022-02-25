import Favorite from "../models/favorites.js";

export const favoriteNumber = (req, res) => {
  Favorite.find({ movieId: req.body.movieId }).exec((err, subscribe) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({ success: true, subscribeNumber: subscribe.length });
  });
};

export const favorited = (req, res) => {
  Favorite.find({
    movieId: req.body.movieId,
    idUser: req.body.idUser,
  }).exec((err, subscribe) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (subscribe.length !== 0) {
      result = true;
    }

    res.status(200).json({ success: true, subcribed: result });
  });
};

export const addToFavorite = (req, res) => {
  console.log(req.body);

  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const removeFromFavorite = (req, res) => {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    idUser: req.body.idUser,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
};

export const getFavoredMovie = (req, res) => {
  Favorite.find({ idUser: req.body.idUser }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favorites });
  });
};
