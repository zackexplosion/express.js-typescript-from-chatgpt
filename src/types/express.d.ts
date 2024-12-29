import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      customVariable?: string; // Add your custom property here
    }
  }
}
