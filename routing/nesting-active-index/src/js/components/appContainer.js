import React from 'react';
import NavLink from './NavLink.js';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div>
                {this.getNavLinks()}
                <br />
                <br />

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

    getNavLinks() {
        return (
            <nav>
                <NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink>
                <NavLink to='/departments'>Departments</NavLink>
                <NavLink to='/employees'>Employees</NavLink>
            </nav>
        )
    }
}

//onlyActiveOnIndex={true}
