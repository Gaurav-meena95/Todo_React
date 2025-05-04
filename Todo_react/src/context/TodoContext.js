import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:'ad this msg',
      iscomplete:false
    }
  ],
  addTodo : (todo)=>{},
  deleteTodo :(id)=>{},
  updateTodo :(id,todo) =>{},
  toggleCoplete :(id) =>{}

});
export function UseTodo (){
  return useContext (TodoContext)
}
export const TodoProvider = TodoContext.Provider;