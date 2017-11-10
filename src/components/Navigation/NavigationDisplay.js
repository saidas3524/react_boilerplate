import React from 'react'
export const NavigationDisplay = ({}) => (
    <div className="navbar">
        <div className="navbar-inner">
            <div className="container">
                <a
                    className="btn btn-navbar"
                    data-toggle="collapse"
                    data-target=".navbar-responsive-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>
                <a className="brand" href="#">Title</a>
                <div className="nav-collapse collapse navbar-responsive-collapse">
                    <ul className="nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Action</a>
                                </li>
                                <li>
                                    <a href="#">Another action</a>
                                </li>
                                <li>
                                    <a href="#">Something else here</a>
                                </li>
                                <li className="divider"></li>
                                <li className="nav-header">Nav header</li>
                                <li>
                                    <a href="#">Separated link</a>
                                </li>
                                <li>
                                    <a href="#">One more separated link</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                        <ul className="nav pull-right">
                            <li>
                                <a href="#">Link</a>
                            </li>
                            <li className="divider-vertical"></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Action</a>
                                    </li>
                                    <li>
                                        <a href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a href="#">Something else here</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">Separated link</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );