import React from 'react'
import {TodoItem} from "../myComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
       <h3 className='text-center my-3'>Todos List</h3>
       {props.todos.map((todo)=>{
           return  <TodoItem todo={props.todos[1]}/>
       })}
      
    </div>
  )
}
