const gamesService = require("../repository/games")

const getAllUserGames = async (fastify, req, res) => {
  const { address: userAddress } = req.params

  if (!userAddress) {
    fastify.log.error("No user address!")
    return res.code(400).send();
  }

  const userGames = await gamesService.getAllUserGamesByAddress(fastify, userAddress)
  
  res.code(200).send({ games: userGames })
}

const postNewGame = async (fastify, req, res) => {
  const { playerOne, playerTwo, CA } = req.body

  if (!playerOne) {
    fastify.log.error("No playerOne address!")
    return res.code(400).send();
  }

  if (!playerTwo) {
    fastify.log.error("No playerTwo address!")
    return res.code(400).send();
  }

  if (!CA) {
    fastify.log.error("No contract address!")
    return res.code(400).send();
  }

  const result = await gamesService.createNewGame(fastify, playerOne, playerTwo, CA)

  res.code(200).send({ game: result[0].id })
}

const getFinishGame = async (fastify, req , res) => {
  const { contractAddress } = req.params

  if (!contractAddress) {
    fastify.log.error("No contract address!")
    return res.code(400).send();
  }

  await gamesService.finishGame(fastify, contractAddress)

  res.code(200).send()
}

module.exports = {
  getAllUserGames,
  getFinishGame, 
  postNewGame,
}