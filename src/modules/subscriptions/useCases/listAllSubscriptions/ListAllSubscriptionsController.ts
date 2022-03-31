import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllSubscriptionsUseCase } from "./ListAllSubscriptionsUseCase";


class ListAllSubscriptionsController {

    async handle(request: Request, response: Response): Promise<Response>{

        const listAllSubscriptionsUseCase = container.resolve(ListAllSubscriptionsUseCase)

        const all = await listAllSubscriptionsUseCase.execute()

        return response.status(200).json(all)
    }
}

export { ListAllSubscriptionsController }