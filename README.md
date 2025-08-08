# 📝 ToDo API

Una API RESTful para gestionar tareas (ToDos), desarrollada con **Node.js**, **Express** y **TypeScript**.

---

## 🚀 Características

- Obtener todas las tareas
- Obtener tarea por ID
- Filtrar tareas completadas y no completadas
- Crear nuevas tareas
- Actualizar tareas
- Eliminar tareas

---

## 📦 Tecnologías usadas

- Node.js
- Express
- TypeScript
- Postman

---

## 📁 Estructura del proyecto

- src/
  - config/
    - envs.ts
  - data/
    - todos.ts
  - presentation/
    - todos/
      - controller.ts
      - routes.ts
    - server.ts
  - app.ts

## Instrucciones

1. Clonar el repositorio

2. Instalar dependencias con el comando "npm install"

3. Configurar las variables de entorno y sustituir el nombre de ".env.template" a ".env". Estas variables son:

- PORT: el puerto que utilizará el servidor

4. Iniciar el proyecto con el comando "npm run dev"

## 📬 Endpoints principales

- GET

  - **/api/todos** devuelve un JSON con todas las tareas.
  - **/api/todos/:id** devuelve la tarea con el ID proporcionado
  - **/api/todos/completadas** devuelve todas las tareas completadas
  - **/api/todos/nocompletadas** devuelve todas las tareas no completadas

- POST

  - **/api/todos** le pasamos "tarea" como texto de la tarea y "completada" como _true_ o _false_ en el body y crea una nueva tarea.

- PUT

  - **/api/todos/:id** podemos modificar el texto de la tarea o si está completada o no.

- DELETE
  - **/api/todos/:id** podemos eliminar la tarea con el ID que le proporcionemos.


¡Gracias por llegar hasta aquí!