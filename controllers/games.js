const gamesService = require("../repository/games")

const getAllUserGames = async (fastify, req, res) => {
  const { address: userAddress } = req.params

  if (!userAddress) {
    fastify.log.info("No user address!")
    return res.code(400).send();
  }

  const userGames = await gamesService.getAllUserGamesByAddress(fastify, userAddress)
  
  res.code(200).send({ games: userGames })
}

module.exports = {
  getAllUserGames
}