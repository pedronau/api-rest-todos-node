import { Request, Response } from "express";
import { todos } from "../../data/todos";

export class TodoController {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  };
}
