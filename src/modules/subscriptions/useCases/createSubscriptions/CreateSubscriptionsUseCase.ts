import { Subscription } from "../../../../modules/subscriptions/entities/Subscription";
import { ISubscriptionsRepository } from "../../../../modules/subscriptions/repositories/ISubscriptionsRepository";
import { IUsersRepository } from "../../../../modules/users/repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
    user_id: string
    name_sick?: string
    gender_sick?: string
    age_sick?: string
    topic: string
    hour: string
    date: string
}

@injectable()
class CreateSubscriptionsUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("SubscriptionsRepository")
        private subscriptionsRepository: ISubscriptionsRepository
    ){}

    async execute({ date, hour, topic, user_id, age_sick, gender_sick, name_sick }: IRequest): Promise<Subscription>{

        const subscription = await this.subscriptionsRepository.create({
            date,
            hour,
            topic,
            user_id,
            age_sick,
            gender_sick,
            name_sick
        })

        return subscription
    }
}

export { CreateSubscriptionsUseCase }