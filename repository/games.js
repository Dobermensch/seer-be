const getAllUserGamesByAddress = async (fastify, userAddress) => {
  const client = await fastify.pg.connect()
  try {
    const { rows: playerOneGames } = await client.query(
      "SELECT * FROM games WHERE LOWER(player_one)=$1", [userAddress.toLowerCase()],
    )

    const { rows: playerTwoGames } = await client.query(
      "SELECT * FROM games WHERE LOWER(player_two)=$1", [userAddress.toLowerCase()],
    )

    return {
      playerOneGames,
      playerTwoGames
    }
  } catch (e) {
    fastify.log.error(e)
  } finally {
    client.release()
  }
}

const createNewGame = async (fastify, playerOne, playerTwo, CA) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(
      "INSERT INTO games (player_one, player_two, contract_address) VALUES ($1, $2, $3) RETURNING id",
      [playerOne, playerTwo, CA]
    )

    return rows
  } catch (e) {
    fastify.log.error(e)
  } finally {
    client.release()
  }
}

const finishGame = async (fastify, contractAddress) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(
      "UPDATE games SET is_finished = true WHERE contract_address = $1",
      [contractAddress]
    )

    return rows
  } catch (e) {
    fastify.log.error(e)
  } finally {
    client.release()
  }
}

module.exports = {
  createNewGame,
  finishGame,
  getAllUserGamesByAddress,
}