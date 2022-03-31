import { getRepository, Repository } from "typeorm";
import { ICreateSubscriptionsDTO } from "../dtos/ICreateSubscriptionsDTO";
import { Subscription } from "../entities/Subscription";
import { ISubscriptionsRepository } from "./ISubscriptionsRepository";



class SubscriptionsRepository implements ISubscriptionsRepository{
    
    private repository: Repository<Subscription>

    constructor(){
        this.repository = getRepository(Subscription)
    }
    
   

    async create({ 
        date,
        hour,
        topic,
        user_id,
        age_sick,
        gender_sick,
        name_sick
    }: ICreateSubscriptionsDTO): Promise<Subscription> {

        const subscription = this.repository.create({
            date,
            hour,
            topic,
            user_id,
            age_sick,
            gender_sick,
            name_sick
        })

        await this.repository.save(subscription)

        return subscription
    }

    async findSubscriptionByUserID(user_id: string): Promise<Subscription[]> {

        const subscription = await this.repository.find({user_id})

        return subscription
    }

    async findAllSubscription(): Promise<Subscription[]> {
        const all = []// await this.repository.query("SELECT users.name, users.bi, subscriptions.id, subscriptions.name, subscriptions.picture, subscriptions.state FROM subscriptions, users, courses WHERE subscriptions.user_id = users.id AND subscriptions.course_id = courses.id")
        
        return all
    }

}

export { SubscriptionsRepository }