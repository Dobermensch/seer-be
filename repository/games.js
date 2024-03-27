const getAllUserGamesByAddress = async (fastify, userAddress) => {
  const client = await fastify.pg.connect()
  try {
    const { rows: playerOneGames } = await client.query(
      'SELECT * FROM games WHERE LOWER(player_one)=$1', [userAddress.toLowerCase()],
    )

    const { rows: playerTwoGames } = await client.query(
      'SELECT * FROM games WHERE LOWER(player_two)=$1', [userAddress.toLowerCase()],
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

module.exports = {
  getAllUserGamesByAddress
}