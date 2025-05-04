import React, { useState } from "react";
import { UseTodo } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = UseTodo();
  
  function add(e){
    e.preventDefault();
    if (!todo) return
    addTodo({todo,iscomplete: false})
  }
  return (
    <form onSubmit={add} className="flex">
      <input
        className="w-full border border-black/10 outline-none rounded-l-lg duration-150 bg-white/20 px-3 py-1.5"
        placeholder="Write here ..."
        type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button
        className="rounded-r-lg px-5 py-1  bg-green-600 shrink-0 "
        type="submit"
      >
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
