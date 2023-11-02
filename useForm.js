import { useState } from "react";


export const useForm = (initialForm ={} ) => {
    const [formState, setFormState] = useState(initialForm);

    // const { username, email, password } = formState;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            //Esto es para actualizar el nombre del evento al valor que se va ingresando en el input
            [ name ]: value
        });
    };
    
    
    const onResetForm = () => {
        setFormState(initialForm);
    };
    

    return{
        //Esparcir lo que ya esta dentro del objeto formState
        ...formState,
        //y tambien mandamos el objeto formaState
        formState,
        onInputChange,
        onResetForm,
    }
}
