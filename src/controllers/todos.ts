import { RequestHandler } from "express";

import Todo from "../models/todo";

export const createTodo: RequestHandler = async (req, res, next) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  await todo.save();
  res.json(todo);
};

export const getTodos: RequestHandler = async (req, res, next) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const updateTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  res.json(todo);
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted" });
};
