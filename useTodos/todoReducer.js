

//Parece que el initialState es como el estado actual de los todos
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO remove Todo]':
      //filter retorna un nuevo arreglo sin mutar el arreglo original
      return initialState.filter(todo => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      //paso por los todos y si alguno tiene el id 
      //buscado, entonces, se cambia su valor true/false
      return initialState.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          }
        }

        return todo;

      });
    default:
      return initialState;
  }
}
