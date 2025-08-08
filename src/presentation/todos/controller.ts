import { Request, Response } from "express";
import { todos } from "../../data/todos";

export class TodoController {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  };

  public getTodosById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res
        .status(405)
        .json({ error: `El argumento ID no es un número válido` });
    }

    const todoById = todos.find((todo) => todo.id === id);

    todoById
      ? res.json(todoById)
      : res.status(404).json({ error: `Todo con ID ${id} no encontrado` });
  };

  public getTodoByCompleted = (req: Request, res: Response) => {
    const completedTodos = todos.filter((todo) => todo.completado === true);
    return res.json(completedTodos);
  };

  public getTodoByNotCompleted = (req: Request, res: Response) => {
    const notCompletedTodos = todos.filter((todo) => todo.completado === false);
    return res.json(notCompletedTodos);
  };

  public createTodo = (req: Request, res: Response) => {
    const { tarea, completado } = req.body;
    if (!tarea || !completado) {
      return res
        .status(405)
        .json({
          error: "Tanto la tarea como el estado (completada) son obligatorios.",
        });
    }

    const newTodo = {
      id: todos.length + 1,
      tarea: tarea,
      completado: completado,
      fechaDeCreacion: new Date(),
    };
    todos.push(newTodo);

    return res.status(200).json(newTodo);
  };
}
