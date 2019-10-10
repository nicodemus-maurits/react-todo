import React from 'react';
import { NavLink } from 'react-router-dom';

const layout = props => {
    return (
        <div className='container'>
            <header>
                <nav className='navbar navbar-expand-sm bg-light'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><NavLink to='/' className='nav-link'>TodoList</NavLink></li>
                        <li className='nav-item'><NavLink to='/categories' className='nav-link'>Categories</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default layout;
