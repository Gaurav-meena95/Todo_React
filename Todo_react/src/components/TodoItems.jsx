import React, { useState } from "react";
import { UseTodo } from "../context";

const TodoItems = () => {
  const {toggleCoplete,updateTodo,deleteTodo} = UseTodo();
   const [isTodoEditable,setTodoEditable] = useState(false);
    
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 w-full  text-black `}
    >
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className={`border border-gray-500 outline-none w-full bg-transparent rounded-lg  text-white`}
      />

      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">"✏️"</button>
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-100 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
