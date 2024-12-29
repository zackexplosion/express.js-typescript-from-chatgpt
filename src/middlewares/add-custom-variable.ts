import { Request, Response, NextFunction } from "express";

export const addCustomVariable = (req: Request, res: Response, next: NextFunction) => {
  req.customVariable = "This is a custom variable!";
  next();
};
