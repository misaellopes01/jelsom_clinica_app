import 'reflect-metadata';
import 'express-async-errors';

import express, { request, response } from 'express';
import cors from 'cors';
import path from 'path';

import "./database";
import './shared/container';
import { router } from './routes';
import { AppError } from './shared/errors/AppError';
import { ListAllSubscriptionsController } from './modules/subscriptions/useCases/listAllSubscriptions/ListAllSubscriptionsController';
import { ListAllUsersController } from './modules/users/useCases/listAllUsers/ListAllUsersControllers';
import { AuthenticateUserController } from './modules/users/useCases/authenticateUser/AuthenticateUserController';
import { ensureAuthenticated } from './shared/infra/http/middlwares/ensureAuthenticated';
import { ensureAdmin } from './shared/infra/http/middlwares/ensureAdmin';
import { ShowUserProfileControllerAdmin } from './modules/users/useCases/showUserProfile/ShowUserProfileControllerAdmin';
import { AuthenticateNormalUserController } from './modules/users/useCases/authenticateUser/AuthenticateNormalUserController';
import { ShowUserProfileController } from './modules/users/useCases/showUserProfile/ShowUserProfileController';
import { CreateUserController } from './modules/users/useCases/createUser/CreateUserController'
import { CreateSubscriptionsController } from './modules/subscriptions/useCases/createSubscriptions/CreateSubscriptionsController';

const app = express();

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// app.use('/consulta', router);

app.get('/', (request, response) =>{ ensureAuthenticated ? response.render('index') : response.render('index')})
app.get('/admin', (request, response) => response.render('login'))

app.get('/user-login', (request, response) => response.render('user-login'))
app.get('/cadastro', (request, response) => response.render('cadastro'))
app.post('/cadastro', new CreateUserController().handle)
app.get('/logout', (request, response) => {
  response.cookie('Authorization:', '')
  return response.redirect('admin')
})
app.get('/logout2', (request, response) => {
  response.cookie('Authorization:', '')
  return response.redirect('user-login')
})
app.get('/call-history', ensureAuthenticated, ensureAdmin, new ListAllSubscriptionsController().handle)
app.post('/auth', new AuthenticateUserController().handle)
app.post('/auth2', new AuthenticateNormalUserController().handle)
app.get('/dashboard', ensureAuthenticated, ensureAdmin, new ListAllUsersController().handle)
app.get('/general', ensureAuthenticated, ensureAdmin, new ShowUserProfileControllerAdmin().handle)
app.get('/user-profile', ensureAuthenticated, new ShowUserProfileController().handle)
app.get('/ensure-auth', ensureAuthenticated, (request, response) => {
  return response.render('form-consulta')
})
app.post('/form-consulta', ensureAuthenticated, new CreateSubscriptionsController().handle)
app.use(
  (err: Error, request: express.Request, response: express.Response, _next: express.NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message} `,
    });
  }
);

export { app };
