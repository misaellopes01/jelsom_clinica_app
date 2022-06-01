import bodyParser from 'body-parser';
import { application, Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authenticateUser = container.resolve(AuthenticateUserUseCase);

      const { user, token } = await authenticateUser.execute({
        email,
        password
      });

      request.headers.authorization = token
      // console.log(request.headers.authorization)
      response.cookie('Authorization:', `Bearer ${token}`)

      // response.setHeader('Authorization:', `Bearer ${token}`)
     
     

      // { headers: {
      //   "Accept": "application/json",
      //   "Content-Type": "application/json",
      //   "Authorization": `Bearer ${token}`
      // }}

      // response.send({
      //   Accept: 'application/json',
      //   ContentType: 'application/json',
      //   Authorization: `Bearer ${token}`,
      // })

      
      return response.redirect('dashboard');

    } catch (error) {

      return response.redirect('login');
    }
  }
}
