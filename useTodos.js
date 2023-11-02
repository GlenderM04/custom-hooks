import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

    //'dispatch' aplica una accion a los todos
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);


    useEffect(() => {
        //En el localStorage solo se pueden guardar strings
        //JSON.stringify(todos) -> devuelve un solo string de tipo:
        //[{"id":1698481119637,"done":false,"description":"Pan"},{"id":1698481132615,"done":false,"description":"jsdnfjksd"},{"id":1698481138900,"done":false,"description":"kjnckjnscd"},{"id":1698481142948,"done":false,"description":"kj"}]
        //y eso se guarda en el localstorage con el 'key': 'todos'
        //CADA VEZ QUE SE EJECUTA EL useEffect, SE SOBREESCRIBE EL VALOR
        //DEL ELEMENTO 'todos' DENTRO DEL LOCALSTORAGE
        //Como las tareas cabian, siempre en el localsotrage se sobreescribiran
        //valores nuevos
        localStorage.setItem('todos', JSON.stringify(todos));


    }, [todos])


    const handleNewTodo = (todo) => {
        //1. debo hacer la accion aqui
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };

        //2. le mando esa accion al 'todoReducer' con el initialState

        dispatch(action);

    }
    const handleDeleteTodo = (id) => {

        const action = {
            type: '[TODO remove Todo]',
            payload: id,
        };

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;



    return {
        todosCount,
        pendingTodosCount,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
