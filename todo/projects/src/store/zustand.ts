import { create } from 'zustand'
import { fetchTodos } from '../api';
export type Todo = {
    id:number;
    name: string;
    completed: boolean;
    date:string;
    color:string;
}
export type TodoState = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (index: number) => void;
    fetchTodos:()=>any
}
const todo = create<TodoState>((set) => ({
    todos: [{name:'note1',id:0,completed:false,date:'',color:''},{name:'note2',id:1,completed:true,date:'',color:''}],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (index) => set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
    fetchTodos:async()=>{
        try {
            const todos = await fetchTodos();
            // @ts-ignore
            set({ todos:todos?.data});
        } catch (error: unknown) {
            console.log(error);
        }
  },
    }
))
export default todo;