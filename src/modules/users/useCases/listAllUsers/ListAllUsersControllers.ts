import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";


class ListAllUsersController {

    async handle(request: Request, response: Response): Promise<void>{

        const listAllUsersUseCase = container.resolve(ListAllUsersUseCase)

        const users = await listAllUsersUseCase.execute()

        return response.render('dashboard', { users })
    }
}

export { ListAllUsersController }