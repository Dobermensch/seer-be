const gamesController = require("../controllers/games")

async function PublicRoutes(fastify, options) {

  fastify.get('/games/user/:address', (req, res) => gamesController.getAllUserGames(fastify, req, res))

  // fastify.get('/games/user/:address', (req, res) => gamesController.getAllUserGames(fastify, req, res))
}

module.exports = PublicRoutes