import React, {Fragment} from 'react';
import { signout, isAuthenticated } from '../auth/index';

import { Link, withRouter } from 'react-router-dom';
import { itemTotal } from './cartHelper';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color: '#ff9900' };
    } else {
        return { color: '#ffffff' };
    }
};

const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" to="/" style={isActive(history, '/')}>Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/shop" style={isActive(history, '/shop')}>Shop</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/cart" style={isActive(history, '/cart')}> Cart {' '} 
                    <sup>
                        <small className='cart-badge'>{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link className="nav-link" to="/user/dashboard" style={isActive(history, '/user/dashboard')}>Dashboard</Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard" style={isActive(history, '/admin/dashboard')}>Dashboard</Link>
                </li>
            )}

            {!isAuthenticated() && ( 
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" style={isActive(history, '/login')}>Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/signup" style={isActive(history, '/signup')}>Signup</Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && ( 
                <li className="nav-item">
                    <span 
                        className="nav-link" 
                        to="/" style={{cursor: 'pointer', color: '#ffffff'}}
                        onClick={() => signout(() => {
                            history.push('/')
                        })}
                        >Signout
                    </span>
                </li>
            )}
        </ul>
    </div>
)


export default withRouter(Menu);