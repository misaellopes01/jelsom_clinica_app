import { UsersRepository } from "../../../../modules/users/repositories/UsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    
    const { id } = request.user

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id)

    if (!user.admin) {
        throw new AppError("User is not an admin")
    }

    next()
}