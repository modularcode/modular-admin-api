import express from 'express'
import { Application } from 'express'

export default {
  init(path: string, app: Application) {
    // get an instance of router
    const router = express.Router()

    router.get('/', (req, res) => {
      res.send('Hello REST api!')
    })

    app.use(path, router)
  },
}
