import express from 'express'

import controller from '../controller/login.developer.controller'

import { validateDeveloper } from '../middleware/validator/login.validator'

const Router = express.Router()

/**
 * @swagger
 * /login/developer:
 *   post:
 *     summary: NOT IN PRODUCTION. Gives a way for developers to log in while developing locally
 */
Router.post('/', validateDeveloper, controller.callback)

export default Router
