import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import PropTypes from 'prop-types';

class Navbar extends Component{
    render(){
        const { newRecipe } = this.props;
        return(
            <Router>
                <header>
                <h2><a>Recipe App</a></h2>
                <nav>
                    <li><a onClick={newRecipe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
            </Router>
        )
    }
}
Navbar.propTypes={
    newRecipe: PropTypes.func.isRequired
};

export default Navbar;