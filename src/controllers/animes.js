const { Animes } = require("../models"); 

async function createAnime(req, res) {
  try {
    const anime = await Animes.create(req.body);
    return res.status(201).json(anime);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createAnime,
};
