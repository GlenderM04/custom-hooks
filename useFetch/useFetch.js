import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [state, setState] = useState(
        {
            data: null,
            isLoading: true,
            hasError: null,
        }
    );




    //Se dispara cada que cambie el url
    //tambien se dispara al principio de toda la renderización
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,

        });

        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);

        setState({
            data: data,
            isLoading: false,
            hasError: null,

        });
    }
    useEffect(() => {
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,

    }
}
