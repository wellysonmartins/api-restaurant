import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"

class ProductController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      throw new AppError("Erro de teste")
    } catch (error) {
      next(error)
    }
  }
}

export { ProductController }