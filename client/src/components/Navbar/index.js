import React from 'react';
// import {Link} from 'react-router-dom'
// import { useGlobalStore } from '../GlobalStore'
// import './styles.css';

// const LoginButton = () => <Link to="/login" className="btn btn-outline-dark my-2 my-sm-0" type="submit">Login</Link>
// const LogoffButton = () => <Link to="/logout" className="btn btn-outline-dark my-2 my-sm-0" type="submit">Logout</Link>

// function Navbar() {
//     const [globalStore] = useGlobalStore();

//     return (
//         <nav className="navbar navbar-expand-lg">
//             <Link className="navbar-brand" to="/">JobLogger</Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>

import { Link } from "react-router-dom";
import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand" href="/">JobLogger</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
// master
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/home">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/settings">My Account</Link>

                <li className="nav-item active">
                    <Link className="nav-link" to="/overview">Overview</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">My Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">The Journey</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {globalStore.loggedIn ? <LogoffButton /> : <LoginButton />}
//                     <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>

                </form>
            </div>
        </nav>
    )
}

export default Navbar;