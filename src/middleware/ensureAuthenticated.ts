import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).json({message: "Token Missing"});
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub }  = verify(token, "c48859f2897cbbd199a306aa6a26b01d") as IPayload;

    req.user_id = sub;

    return next();
  } catch(err) {
    return res.status(401).json({message: "Token Missing"})
  }
} 