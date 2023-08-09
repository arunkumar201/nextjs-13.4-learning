"use client";

import React, { useEffect, useState } from "react";

import { addTodos } from "@/app/_actions/addTodos";

const Page: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  console.log("🚀 ~ file: page.tsx:9 ~ todos:", todos);
  const [description, setDescription] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setDescription(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(description.length === 0) return;
    await addTodos(description);
    setIsAdded((prev) => !prev);
  };
  useEffect(() => {
    const getTodos = async () => {
      const todos = await addTodos();
      setTodos(todos);
    };
    getTodos();
  }, [isAdded]);
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={description}
          onChange={handleInputChange}
          className="px-4 py-2 mr-2 text-gray-800 border border-gray-300 rounded"
          placeholder="Enter description"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos &&
          todos?.map((todo: any, index) => (
            <li key={index} className="mb-2">
              {todo.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page;
