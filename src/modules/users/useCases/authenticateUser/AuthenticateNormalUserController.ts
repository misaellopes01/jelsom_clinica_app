import bodyParser from 'body-parser';
import { application, Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateNormalUserController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateUser = container.resolve(AuthenticateUserUseCase);

      const { user, token } = await authenticateUser.execute({
        email,
        password
      });

      request.headers.authorization = token

      response.cookie('Authorization:', `Bearer ${token}`)
      
      return response.redirect('user-profile');

    } catch (error) {

      return response.redirect('user-login');
    }
  }
}
