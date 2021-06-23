import express, { Request, Response, NextFunction } from 'express'
import swaggerUi from 'swagger-ui-express'

import swagger from '../utils/swagger.utils'

import assignments from './assignments.router'
import courses from './courses.router'
import login from './login.router'
import users from './users.router'
import status from './status.router'

import { isAuthorized } from '../middleware/auth.middleware'
import userCourse from './user-course.router'
import logout from './logout.router'
import status from './status.router'

import { isAuthorized } from '../middleware/auth.middleware'

import { NotFound } from '../utils/apiResponse.utils'

const Router = express.Router()

Router.use('/login', login)
Router.use('/logout', logout)
Router.use('/users', isAuthorized, users)
Router.use('/status', status)
Router.use('/assignments', isAuthorized, assignments)
Router.use('/courses', isAuthorized, courses)
Router.use('/user-course', userCourse)
Router.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger))

Router.use('/', (req: Request, res: Response, next: NextFunction) => res.status(404).send(NotFound))

export default Router
