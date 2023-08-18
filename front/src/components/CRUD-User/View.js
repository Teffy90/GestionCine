import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
 
const View = () => {
    const {id}=useParams();
    // console.log(id);
    const[user,setUser]=useState([]);
    const navigate = useNavigate();
 
    useEffect(()=>{
        fetchUser();
    },[id]);
 
    const fetchUser=async()=>{
        try{
        const result=await axios.get("http://127.0.0.1:8000/api/users/"+id);
        console.log(result.data.users);
        setUser(result.data.users)
 
        }catch(err){
            console.log("Something Wrong");
        }
    }
 
    const clickToBackHandler=()=>{
        navigate('/');
    }
    return <div>
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
 
                    <h1>Detalle del Cliente</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Nombre de la Pelicula</th>
                                <th>Cantidad de Entradas</th>
                                <th>Ubicación</th>
                                <th>Fecha</th>
                                <th>Precio</th>
                                <th>Acción</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Spider-Man: Across the Spider-Verse</td>
                                <td>2</td>
                                <td>J10 - J11</td>
                                <td>21/08/2023</td>
                                <td>18000</td>
                                <td><NavLink to="" className="btn btn-danger mx-2">Descargar Factura</NavLink></td>
                            </tr>
 
                        </tbody>
                    </table>
                </div>
 
            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={clickToBackHandler}>Regresar</button></div>
        </div>
    </div>;
};
 
export default View;