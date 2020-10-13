// import React
import React, { Component } from 'react';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css"


class SpaceTrader extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="project-main">
                    <h1 class="project-title cyan">Space Trader</h1>
                    <h2 class="project-date dark-cyan"><i>January - May 2019</i></h2>
                    <h1 class="project-body white"> Space Trader was an old school video game where you are a trader in space. Like most old
                    school games, it's relatively simple both in concept and in execution. This worked perfectly as a part of my Objects and
                    Design class, where we could simultaneously learn how to make the game, and learn about Agile Development and Object-Oriented
                    Programming.
                    </h1>
                    <h1 class="project-header white">How It's Made</h1>
                    <h1 class="project-body white"> For the base version of the game required by the class, we created the game in Android Studio,
                    it worked well as a mobile game. We broke the project into about 10 milestones, following Agile's philosophy of time-boxed
                    development. Every couple weeks we had a few features that needed to be implemented into our game. To organize ourselves,
                    we created a sprint board using ZenHub, an extension for Github. We'd create tasks, assign them to team members, and then
                    get to work. After the end of the semester, we had made a game where you can travel from planet to planet, purchase and sell
                    items, and refuel for your next mission.
                    </h1>
                    <h1 class="project-header white">Some Extra Credit</h1>
                    <h1 class="project-body white"> Towards the end of the semester our class was presented with a few interesting ways of
                    earning extra credit for the class. One was relatively minor: use firebase to store player data in between sessions.
                    But we combined this with an even larger task: creating the entire game in ReactNative. For every milestone we completed
                    with another platform (web, mobile, etc.), we would receive extra credit, so my team and I decided to do all of the milestones.
                    So by the end of the semester we had not one, but two working iterations of space trader. Overall this class was an
                    amazing opportunity to learn many platforms, and multiple development cycles, which have continued to pop up in my
                    projects and internships since.
                    </h1>
                </div>
            </div>
        )
    }
}

export default SpaceTrader;