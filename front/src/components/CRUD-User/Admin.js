import React from 'react';
import List from './List';

function Admin() {
  return (
    <div className='container'>
        <h2 className='w-100 d-flex justify-content-center'>Panel de Administrador</h2>
        <div className=''>
            <List />
        </div>
    </div>
    
    
  );
}

export default Admin;