import { useEffect, useState } from 'react';
import {TodoProvider} from './context'
import { TodoForm, TodoItems } from './components';
function App() { 
  const [todos, setTodo] = useState([])

  const addTodo =(todo)=>{
    setTodo((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((ele)=>ele.id !== id))
  }
  const updateTodo = (id,todo)=>{
    setTodo((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ? todo:prevtodo)))
  }
  const toggleCoplete = (id)=>{
    setTodo((prev)=>prev.map((prevtodo)=> prevtodo.id ===id ? {...prevtodo,iscomplete:!prevtodo.iscomplete} : prevtodo))
  }
  useEffect(()=>{
    const  todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length>0){
      setTodo(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todos' ,JSON.stringify(todos))
  },[todos])

  return (
    
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCoplete}}>
    <div className='bg-black min-h-screen  py-10'>
      <div className=' bg-gray-700 w-full rounded-xl max-w-2xl mx-auto shadow-2xl px-4 py-5 text-white'>
        <h1 className='text-2xl text-center mt-2 mb-8 font-bold'>Mange Your Todo</h1>
        <div className='mb-4'>
          <TodoForm/>
        </div>
        <div className=' flex flex-wrap gap-y-4'>
          {
            todos.map((todo)=>(
              <div className='w-full' key={todo.id}>
                <TodoItems todo={todo}/>
              </div>
            ))
          }   
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}
  
export default App
