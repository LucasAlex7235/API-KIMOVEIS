import { Request, Response, NextFunction } from "express";

class AppError extends Error {
  message: any;
  statusCode: number;
  constructor(message: any, statusCode = 400) {
    super();
    this.message = { message: message };
    this.statusCode = statusCode;
  }
}

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.message);
  }
  console.log(err);

  return res.status(500).json({ message: "Internal Server Error." });
};

export { AppError, errorHandler };
