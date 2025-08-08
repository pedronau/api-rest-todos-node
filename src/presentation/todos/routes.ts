import { Router } from "express";
import { TodoController } from "./controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodoController();

    router.get("/completados", todoController.getTodoByCompleted);
    router.get("/nocompletados", todoController.getTodoByNotCompleted);
    router.get("/:id", todoController.getTodosById);
    router.get("/", todoController.getTodos);

    router.post("/", todoController.createTodo);

    return router;
  }
}
