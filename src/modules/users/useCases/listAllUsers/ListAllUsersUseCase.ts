import { IUsersRepository } from "../../../../modules/users/repositories/IUsersRepository"
import { inject, injectable } from "tsyringe"
import { User } from "../../../../modules/users/entities/User"

@injectable()
class ListAllUsersUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute(): Promise<User[]>{

        const all = await this.usersRepository.findAllUsers()

        return all
    }
}

export { ListAllUsersUseCase }