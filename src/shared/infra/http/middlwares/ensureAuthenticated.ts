import { app } from "app";
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

import authConfig from '../../../../config/auth';
import { JWTInvalidTokenError } from "../../../errors/JWTInvalidTokenError";
import { JWTTokenMissingError } from "../../../errors/JWTTokenMissingError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.cookie;

  if (!authHeader) {
    return response.redirect('user-login')
  }

  const [, token] = authHeader.split(":=Bearer%20");

  try {
    const { sub: user_id } = verify(token, "senhasupersecreta123") as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    response.redirect('user-login')
  }
}