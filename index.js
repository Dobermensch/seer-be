require("dotenv").config()
const fastify = require("fastify")({
  logger: true
})

const start = async () => {
    try {
      await fastify.register(require("@fastify/cors"))
      await fastify.register(require("./setup/db"))
      await fastify.register(require("./routes/public"), { prefix: "/public" })

      await fastify.ready()
      fastify.listen({port: process.env.PORT || 3001, host: "::"})
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }

start()