import React, { useState } from 'react';
import { signup } from '../auth/index';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})

    }

    const clickSubmit = (event)  => {
        event.preventDefault();
        signup({name, email, password})
        .then(data => {
            if(data.error) {
               setValues({
                   ...values, 
                   error: data.error,
                   success: false
                }) 
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
        })
    };
    
    const signUpForm = () => (
        <form>
            <div className='form-group'>   
                <label className='text-muted'>Name</label>
                <input 
                    onChange={handleChange('name')} 
                    type='text' 
                    className='form-control'
                    value={name}
                    />

            </div>

            <div className='form-group'>   
                <label className='text-muted'>Email</label>
                <input 
                    onChange={handleChange('email')} 
                    type='email' 
                    className='form-control'
                    />
            </div>

            <div className='form-group'>   
                <label className='text-muted'>Password</label>
                <input 
                    onChange={handleChange('password')} 
                    type='password' 
                    className='form-control'
                    value={password}
                    />
            </div>

            <button onClick={clickSubmit} className='btn btn-primary'> Submit </button>
        </form>
    );
    
    const showError = () => (
        <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>
            New Account is created. Please <Link to='/login'>Login</Link>
        </div>
    )


    return (
        <Layout 
            title='Signup Page' 
            description='Signup React E-Commerce App'
            className='container col-md-8 offset-md-2'
            >
            {showError()}
            {showSuccess()}
            {signUpForm()} 
        </Layout>
    )
}


export default Signup;