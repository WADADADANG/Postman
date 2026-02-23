
const fastify = require('fastify')({ logger: false })

fastify.get('/', async (request, reply) => {
    return { hello: 'fastify world!' }
})

const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 3001 })
        console.log('Server is running at http://localhost:3000')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()