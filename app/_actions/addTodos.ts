"use server";

import Todos from "@/models/Todos.model";
import { connect } from "@/dbConfig/dbConfig";

export async function addTodos(description?: string) {
  connect();
  const randomId = Math.floor(Math.random() * (12 - 2 + 1) + 2);
  try {
    if (description) {
      const todo = new Todos({ description, id: randomId });
      const todos = await todo.save();
      return todos;
    } else {
      const todos = Todos.find();
      return todos;
    }
  } catch (error) {
    console.log("🚀 ~ file: addTodos.ts:10 ~ addTodos ~ error:", error);
    return new Error("Error, could not add todo");
  }
}
