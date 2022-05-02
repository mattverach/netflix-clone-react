import { useState } from "react";
import { TextField } from "@mui/material";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function Login(){

    const [formData, setFormData] = useState({email: "", password: ""});


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Envio de formulario: ", formData);

    }

    const changeHandler = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name] : e.target.value});
    }


    return(
        <div className="login">
            <h2>Ingresar</h2>
            {console.log("formData: ", formData)}
            <ValidatorForm onSubmit={submitHandler}>
                <TextValidator 
                    id="filled-email" 
                    label="Email" 
                    variant="filled" 
                    name="email" 
                    value={formData.email}
                    onChange={changeHandler}
                    validators={['required', 'isEmail']}
                    errorMessages={['Este campo es obligatorio', 'Email ingresado no es valido']}
                />
                <TextValidator 
                    id="filled-password" 
                    label="Contraseña" 
                    variant="filled" 
                    name="password" 
                    value={formData.password}
                    onChange={changeHandler}
                    type="password"
                    validators={['required']}
                    errorMessages={['Este campo es obligatorio']}
                />
            <button type="submit">Ingresar</button>
             </ValidatorForm>
        </div>
    )

}

export default Login;