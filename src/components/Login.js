import { TextField } from "@mui/material";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function Login(){
    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);


       if (email === '' || password === '') {
           console.log('Por favor, complete todos los campos');
    }
}

    return(
        <div className="login">
            <h2>Ingresar</h2>
            <ValidatorForm onSubmit={submitHandler}>
                <TextField id="filled-email" label="Email" variant="filled" name="email" type="email"/>
                <TextField id="filled-password" label="Contraseña" variant="filled" name="password" type="password"/>
            <button type="submit">Ingresar</button>
             </ValidatorForm>
        </div>
    )

}

export default Login;