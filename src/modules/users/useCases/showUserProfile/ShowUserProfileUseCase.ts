import { ISubscriptionsRepository } from "../../../../modules/subscriptions/repositories/ISubscriptionsRepository";
import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ShowUserProfileError } from "./ShowUserProfileError";

@injectable()
export class ShowUserProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('SubscriptionsRepository')
    private subscriptionsRepository: ISubscriptionsRepository
  ) {}

  async execute(user_id: string) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new ShowUserProfileError();
    }

    const subscription = await this.subscriptionsRepository.findSubscriptionByUserID(user_id)
    
    const data = {
      user,
      subscription
    }
    
    return data;
  }
}
