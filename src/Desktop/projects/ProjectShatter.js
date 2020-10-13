// import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class ProjectShatter extends Component {
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
                    <h1 class="project-body white"> Project Shatter was a project created by me and 3 fellow GT students for the
                    2019 Collegiate Cup Hackathon, for which we won the People's Choice Award. Click <a class="dark-cyan" href="https://devpost.com/software/project-shatter?ref_content=user-portfolio&ref_feature=in_progress">here</a> to 
                    learn more about this project, or keep reading below!
                    </h1>
                    <h1 class="project-header white">The Goal</h1>
                    <h1 class="project-body white"> The premise for this hackathon was simple: help out Georgia residents in need. Teams
                    spent the first few hours of the hackathon brainstorming and researching on a more specific issue to tackle over the
                    coming days. My team and I settled on the issue of education. Specifically, we wanted to provide better opportunities
                    for students throughout more rural regions of Georgia to learn Computer Science. Here's what we came up with.
                    </h1>
                    <h1 class="project-header white">Shattering the Glass Ceiling</h1>
                    <h1 class="project-body white"> In order to create a good solution, we had to know what the source of the problem was.
                    Over a quarter of Georgia's students have grown up in poverty, and don't even have access to the internet. For students
                    looking to explore their passion for CS, often times their curriculums fall short, not even offering AP CS. Furthermore,
                    these same students may also need to work jobs after classes just to help their families make ends meet, leaving little
                    opportunity for self-education. This is where Project Shatter comes in.
                    </h1>
                    <h1 class="project-body white"> Our system establishes a network within school systems to connect these students with 
                    companies and nonprofit organizations looking for someone to help with minor, computing related tasks. Students can 
                    use the many free resources we provide to improve their abilities and expand their knowledge, opening them up to be 
                    hired for more advanced tasks. This allows them to both learn computer science and earn the income their family may 
                    depend on.
                    </h1>
                    <h1 class="project-header white">Incentives for Businesses</h1>
                    <h1 class="project-body white"> Companies and nonprofit organizations looking for cheap work on small tasks can post 
                    a task to the network, allowing students to apply for the job. Those who the company deems best fit for the job are 
                    hired, and the students are able to work directly for that company. Through this system all businesses and 
                    organizations are able to fulfill their corporate social responsibility, promote diversity, and save money.
                    </h1>
                    <h1 class="project-header white">How this Helps</h1>
                    <h1 class="project-body white"> Our hope is that Project Shatter sets up our students for future success. By giving 
                    them the opportunities to gain real world experience and work on real projects, we aim to allow students to get into 
                    more prestigious universities and long term employment.
                    </h1>
                </div>
            </div>
        )
    }
}

export default ProjectShatter;