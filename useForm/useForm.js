import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        const {name, value} = target; 
        //console.log({name, value})
        
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => { 
        // setFormState({
        //     username: '',
        //     email: '',
        //     password: '',
        // });
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm
    }
}
