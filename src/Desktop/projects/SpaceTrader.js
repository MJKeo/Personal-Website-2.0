// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class SpaceTrader extends Component {
    constructor(props) {
        super(props);

        // methods

        // variables
    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="project-main">
                    <h1 class="project-title cyan">Project Shatter</h1>
                    <h2 class="project-date dark-cyan"><i>January 2020</i></h2>
                    <h1 class="project-body white"> This page is a work in progress
                    </h1>
                </div>
            </div>
        )
    }
}

export default SpaceTrader;