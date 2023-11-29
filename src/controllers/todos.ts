import { RequestHandler } from "express";
import ApplicationError from "../helpers/error-response";
import { SuccessResponse } from "../helpers/success-response";

import Todo from "../models/todo";

/**
 * @description This creates a todo item
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
export const createTodo: RequestHandler = async (req, res) => {
  const { text, completed } = req.body;
  const todo = new Todo({ text, completed });
  await todo.save();
  const response = new SuccessResponse({
    message: "Todo successfully created",
    data: todo,
  });
  return res.json(response);
};

/**
 * @description This lists the todo list in paginated manner using skip and limit queries, filters based on filter query
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
export const getTodos: RequestHandler = async (req, res) => {
  const { skip = 0, limit = 10, filter } = req.query;
  const todos = await Todo.find()
    .limit(Number(limit))
    .skip(Number(skip))
    .sort("-createdAt");
  const response = new SuccessResponse({
    message: "Todos successfully fetched",
    data: todos,
  });
  return res.json(response);
};

/**
 * @description Updates a todo list item by Id
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
export const updateTodo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { completed, text } = req.body;

  const todo = await Todo.findById(id);
  if (!todo) {
    throw new ApplicationError(400, "Todo item not found");
  }
  const updatedData = await Todo.findByIdAndUpdate(
    id,
    { completed, text },
    { new: true }
  );
  const response = new SuccessResponse({
    message: "Todos successfully updated",
    data: updatedData
  });
  return res.json(response);
};

/**
 * @description Delete a todo list item
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
export const deleteTodo: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    throw new ApplicationError(400, "Todo item not found");
  }
  await Todo.findByIdAndDelete(id);
  const response = new SuccessResponse({
    message: "Todo successfully deleted",
  });
  return res.json(response);
};
