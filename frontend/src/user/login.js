import React, { useState } from 'react';
import { login, authenticate, isAuthenticated } from '../auth/index';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectTo: false
    });

    const { email, password, error, loading, redirectTo } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})

    }

    const clickSubmit = (event)  => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        login({ email, password})
        .then(data => {
            if(data.error) {
               setValues({
                   ...values, 
                   error: data.error,
                   loading: false
                }) 
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectTo: true
                    })
                })
            }
        })
    };
    
    const signUpForm = () => (
        <form>
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

    const showLoading = () => (
       loading && (
           <div className='alert alert-info'>
                <h2> ***** Loading ***** </h2>
           </div>
        )
    );

    const redirectUser = () => {
        if(redirectTo) {
            if(user && user.role === 1) {
                return <Redirect to='/admin/dashboard' />
            } else {
                return <Redirect to='/user/dashboard' />
            }
        }
        if(isAuthenticated()) {
            return <Redirect to='/' />;
        }
    } 


    return (
        <Layout 
            title='Login Page' 
            description='Login React E-Commerce App'
            className='container col-md-8 offset-md-2'
            >
            {showError()}
            {showLoading()}
            {signUpForm()} 
            {redirectUser()}
        </Layout>
    )
}


export default Login;