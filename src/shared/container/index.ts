import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';
import { ISubscriptionsRepository } from '../../modules/subscriptions/repositories/ISubscriptionsRepository';
import { SubscriptionsRepository } from '../../modules/subscriptions/repositories/SubscriptionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ISubscriptionsRepository>(
  'SubscriptionsRepository',
  SubscriptionsRepository
);
