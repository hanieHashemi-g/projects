import type { Todo } from "../store/zustand";
import api from "./config"

export const fetchTodos =async()=>{
try{
const todos =await api.get<Todo>('todos')
return todos
}catch{
console.log('error');

}
}
