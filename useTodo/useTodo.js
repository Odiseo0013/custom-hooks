import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = ( initialState = []  ) => {    

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        //console.log(todos);
    }, [todos])
    
    
    const handleNewToDo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload:  todo 
        }
        //console.log({ todo });
        dispatch(action);
    }
    
    const handleDeleteToDo = ( id ) => { 
        //console.log({ id });
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });      
    }

    const handleToggleToDo = ( id ) => { 
        console.log({ id });
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });      
    }    


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        handleDeleteToDo,
        handleNewToDo,
        handleToggleToDo
    }        

}