// import React
import React, { Component } from 'react';
// import components
import Navbar from "../components/Navbar.js";
// import styling
import "../styling/Project.css";

class WorstTTT extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Navbar />
                <div class="project-main">
                    <h1 class="project-title cyan">Worst Tic Tac Toe</h1>
                    <h2 class="project-link dark-cyan"><i><a href="https://mjkeo.github.io/Worst_TicTacToe/">https://mjkeo.github.io/Worst_TicTacToe/</a></i></h2>
                    <h1 class="project-body white"> I was watching this YouTube video one time where this guy coded a perfect Tic Tac Toe AI.
                    I thought the way it was made was interesting (I'll get into that later), so I wanted to make my own spin on it. Naturally,
                    if you can make an AI that never loses, you can make one that'll never win. This is exactly what I did.
                    </h1>
                    <h1 class="project-header white">Making the Perfect AI</h1>
                    <h1 class="project-body white"> The foundation for the perfect Tic Tac Toe AI is the minimax function. This basically means
                    that we want to make the best move possible assuming the other player is making their best move optimal. If we assign a
                    numerical value to each possible outcome of the game (+1 for a win, 0 for tie, -1 for a loss), then minimax means the opponent
                    is trying to minimize the score of the outcome, while we're trying to maximize it (a -1 for us is a win for them). So, given a 
                    board position, we analyze each move we can make. For a given move, we then branch down all possible outcomes, assuming
                    the opponent plays optimally, and see whether we will win or lose. If the opponent can only make two moves, with one making
                    them win, then we consider that position a -1 for us, because if we reach that position and it's the opponent's move, then
                    they will choose their winning move (our loss). So even if we're only 2 moves in we can still determine if a given move will
                    eventually lead to a 1,0, or -1. Therefore, the perfect AI will choose a move with the highest value (ideally a 1).
                    </h1>
                    <h1 class="project-header white">Now Make it Awful</h1>
                    <h1 class="project-body white"> In order to make this AI the worst player ever, we just have to change how we value a
                    board. If we want to lose, then make a losing poisition have a value of 1, and a win is a -1. Lastly, we need to change
                    our assumption for how the opponent plays. Once again, if our objective is to lose, then let's assume the opponent does
                    all they can to prevent this from happening, so the opponent is trying to lose as well. Now we have the perfect, Awful
                    Tic Tac Toe AI. Try and see if you can lose!
                    </h1>
                </div>
            </div>
        )
    }
}

export default WorstTTT;