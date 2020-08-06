import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()
const classesControllers = new ClassesController
const connectionsController = new ConnectionsController

routes.get('/classes', classesControllers.index) // listagem de classe
routes.post('/classes', classesControllers.create) // criar classe

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create) // criar conexões


export default routes