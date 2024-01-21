'use client'

import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos]:any = useState([]);

  const addTodo = (todo :any) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id: any) => setTodos(todos.filter((todo: { id: any; }) => todo.id !== id));

  const toggleComplete = (id: any) => {
    setTodos(
      todos.map((todo: { id: any; completed: any; }) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id: any) => {
    setTodos(
      todos.map((todo: { id: any; isEditing: any; }) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task: any, id: any) => {
    setTodos(
      todos.map((todo: { id: any; isEditing: any; }) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo: { isEditing: any; id: any; }) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
