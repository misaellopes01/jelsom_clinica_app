import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSubscriptionsUseCase } from "./CreateSubscriptionsUseCase";

interface IFiles {
    filename: string;
    }

class CreateSubscriptionsController {

    async handle(request: Request ,response: Response): Promise<Response>{

        const files = request.files as IFiles[]
        const { course_id } = request.params
        const { id: user_id } = request.user

        const file0 = files[0].filename
        const file1 = files[1].filename
        const file2 = files[2].filename

        const createSubscriptionsUseCase = container.resolve(CreateSubscriptionsUseCase)

        const subscription = await createSubscriptionsUseCase.execute({
            bi: String(file0),
            certificate: String(file1),
            course_id,
            picture: String(file2),
            user_id
        })

        return response.status(201).json(subscription)
    }
}

export { CreateSubscriptionsController }