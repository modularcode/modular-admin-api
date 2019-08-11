import express from 'express'

import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'

import api from './api'
import apiGraphQL from './apiGraphQL'

const app = express()

app.use('*', cors())
app.use(compression())

api.init('/api', app)
apiGraphQL.init('/graphql', app)

createServer(app).listen({ port: 4000 }, (): void => {
  console.log(`\n🚀 REST API is now running on http://localhost:4000/api`)
  console.log(`\n🚀 GraphQL is now running on http://localhost:4000/graphql`)
})
