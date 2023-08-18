import React, { useState } from 'react';
import List from './List';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    const navigate = useNavigate();
 
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: ""
    });
 
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
 
    }
    const [loading,setLoading]=useState()
 
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce= await axios.post("http://127.0.0.1:8000/api/addnew", userField);
            console.log(responce)
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return <Home/>
    }

    const clickToBackHandler=()=>{
        navigate('/');
    }
 
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center'>Bienvenido</h2>
                <div className='row'>
                    <div className='container justify-content-center'>
                        <h3>Regístrate</h3>
                        <form>
                            <div className="mb-3 mt-3">
                                <label className="form-label"> Nombre:</label>
                                <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre completo" name="name" onChange={e => changeUserFieldHandler(e)} />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Correo:</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electronico" name="email" onChange={e => changeUserFieldHandler(e)} required/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Contraseña:</label>
                                <input type="text" className="form-control" id="password" placeholder="Ingresa una contraseña" name="password" onChange={e => changeUserFieldHandler(e)} required/>
                            </div>
                             
                            <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Aceptar</button>{' '}
                            <button className='btn btn-primary' onClick={clickToBackHandler}>Regresar</button>
                        </form>
                    </div>
                    
                </div>
        </div>
    )
};
 
export default Home;