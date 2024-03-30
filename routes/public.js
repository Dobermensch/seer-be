const gamesController = require("../controllers/games")

async function PublicRoutes(fastify, options) {

  fastify.post("/games", (req, res) => gamesController.postNewGame(fastify, req, res))

  fastify.get("/games/user/:address", (req, res) => gamesController.getAllUserGames(fastify, req, res))

  fastify.get("/games/:contractAddress/finish", (req, res) => gamesController.getFinishGame(fastify, req, res))
}

module.exports = PublicRoutes