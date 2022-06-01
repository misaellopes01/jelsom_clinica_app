import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllSubscriptionsUseCase } from "./ListAllSubscriptionsUseCase";


class ListAllSubscriptionsController {

    async handle(request: Request, response: Response): Promise<void>{

        const listAllSubscriptionsUseCase = container.resolve(ListAllSubscriptionsUseCase)

        const alls = await listAllSubscriptionsUseCase.execute()

        return response.render('call-history', {alls})
    }
}

export { ListAllSubscriptionsController }