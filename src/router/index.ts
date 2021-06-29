import express, { Request, Response, NextFunction } from 'express'
import swaggerUi from 'swagger-ui-express'

import swagger from '../utils/swagger.utils'

import assignments from './assignments.router'
import courses from './courses.router'
import login from './login.router'
import status from './status.router'
import users from './users.router'

import { isAuthorized } from '../middleware/auth.middleware'

import { NotFound } from '../utils/apiResponse.utils'

const Router = express.Router()

Router.use('/login', login)
Router.use('/users', isAuthorized, users)
Router.use('/status', status)
Router.use('/assignments', assignments)
Router.use('/courses', courses)
Router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger))

Router.use('/', (req: Request, res: Response, next: NextFunction) => res.status(404).send(NotFound))

export default Router
