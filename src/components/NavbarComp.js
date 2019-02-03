import React, { Component } from 'react';
import logo from '../logo.svg';

export default class NavbarComp extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Markdown previewer
                </a>
            </nav>
                );
            }
}