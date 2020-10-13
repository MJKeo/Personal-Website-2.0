// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
import Thumbnail from "../components/Thumbnail.js";
// import photos
import HomeDepotIcon from "../../Images/homedepot-icon.jpg";
import MealMeIcon from "../../Images/mealme-icon.png";
import DCUIcon from "../../Images/dcu-icon.png";
import CiscoIcon from "../../Images/cisco-icon.jpeg";
import LetsGetReadyIcon from "../../Images/letsready-icon.jpg";
import SPRIcon from "../../Images/spr-icon.jpeg";
// import styling
import "../styling/Sections.css";


class Experience extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <Navbar />
                <h1 class="section-title cyan">Experience</h1>
                <div class="thumbnail-centering-div">
                    <div class="thumbnail-div">
                        <Link to="/Experiences/Home-Depot" ><Thumbnail title="Software Engineer Intern: Home Depot" image={HomeDepotIcon} /></Link>
                        <Link to="/Experiences/MealMe" ><Thumbnail title="iOS Developer Intern: MealMe" image={MealMeIcon} /></Link>
                        <Link to="/Experiences/DCU" ><Thumbnail title="IT Intern: Digital Federal Credit Union" image={DCUIcon} /></Link>
                        <Link to="/Experiences/Cisco-Systems" ><Thumbnail title="Intern: Cisco Systems" image={CiscoIcon} /></Link>
                        <Link to="/Experiences/Lets-Get-Ready" ><Thumbnail title="Instructor: Let's Get Ready" image={LetsGetReadyIcon} /></Link>
                        <Link to="/Experiences/Shrewsbury-Parks-And-Rec" ><Thumbnail title="Camp Counselor: Shrewsury Parks & Recreation" image={SPRIcon} /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;