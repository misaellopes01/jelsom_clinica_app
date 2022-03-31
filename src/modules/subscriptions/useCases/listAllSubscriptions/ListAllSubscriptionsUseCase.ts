import { ISubscriptionsRepository } from "../../../../modules/subscriptions/repositories/ISubscriptionsRepository"
import { inject, injectable } from "tsyringe"
import { Subscription } from "../../../../modules/subscriptions/entities/Subscription"

@injectable()
class ListAllSubscriptionsUseCase {

    constructor(
        @inject("SubscriptionsRepository")
        private subscriptionsRepository: ISubscriptionsRepository
    ){}

    async execute(): Promise<Subscription[]>{

        const all = this.subscriptionsRepository.findAllSubscription()

        return all
    }
}

export { ListAllSubscriptionsUseCase }