import { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'

import schema from './schema'

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
})

export default {
  init(path: string, app: Application) {
    server.applyMiddleware({ app, path })
  },
}
