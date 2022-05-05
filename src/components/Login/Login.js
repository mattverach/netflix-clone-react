import { useState, forwardRef } from "react";
import { TextField } from "@mui/material";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from "axios";
import setLogin from "../../services/Login.service";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Login(){

    const [formData, setFormData] = useState({email: "", password: ""});
    const [token, setToken] = useState(null);
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: "",
        type: ""
    });

    const navigate = useNavigate();

    //Se encarga del submit del formulario y de actuar segun la respuesta del servidor
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Envio de formulario: ", formData);
        setLogin(formData)
        .then(
            (response) => {
                console.log("Usuario autenticado");
                    setToken(response.data.token);
                    
                    setShowMessage({
                        status: true,
                        message: "Usuario autenticado",
                        type: "success"
                    });
                    localStorage.setItem("token", response.data.token);
                    navigate("/");
            })
        .catch((err) => {
            console.log("Error: ", err);
            setShowMessage({
                status: true,
                message: "Usuario no autenticado",
                type: "error"
            });
            // TODO: borrar cuando tenga el backend
            navigate("/")
        })
        .finally(() => {
            console.log("Finalizado");
        });
    }

    //Se encarga de cerrar el mensaje de error
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    //Se encarga de los cambios en el formulario para que sean validados
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
             <Snackbar open={showMessage.status} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={showMessage.type}>
                    {showMessage.message}
                </Alert>
             </Snackbar>
        </div>
    )

}

export default Login;