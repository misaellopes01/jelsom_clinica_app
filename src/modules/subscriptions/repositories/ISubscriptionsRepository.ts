import { ICreateSubscriptionsDTO } from "../dtos/ICreateSubscriptionsDTO";
import { Subscription } from "../entities/Subscription";

interface ISubscriptionsRepository{

    create(data: ICreateSubscriptionsDTO): Promise<Subscription>
    findSubscriptionByUserID(id: string): Promise<Subscription[]>
    findAllSubscription(): Promise<Subscription[]>
}
 export { ISubscriptionsRepository }