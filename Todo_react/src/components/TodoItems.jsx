import React, { useState } from "react";
import { UseTodo } from "../context";

const TodoItems = ({todo}) => {
  const [isTodoEditable,setTodoEditable] = useState(false);
  const [TodoMsg,setTodoMsg] = useState(todo.todo);

  const {toggleCoplete,updateTodo,deleteTodo} = UseTodo();


   function editTodo(){
    setTodoEditable(true)
    updateTodo(todo.id,{...todo,todo:TodoMsg})
    setTodoEditable(false)
   }
   function toggleCopleted(){
    toggleCoplete(todo.id)
   }

  return ( 
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 w-full  text-black ${todo.iscomplete ? "bg-[#b5e9a7e0] line-through text-black" : 'bg-[#71517466]' }`}
    >
      <input 
      type="checkbox" 
      checked= {todo.iscomplete}
      className="cursor-pointer"
      onChange={toggleCopleted}
       />
      <input
        type="text"
        className={`border border-gray-500 outline-none w-full bg-transparent rounded-lg  text-white`}
      />

      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">{isTodoEditable ? "📁" : "✏️" }</button>
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-100 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
};

export default TodoItems;
