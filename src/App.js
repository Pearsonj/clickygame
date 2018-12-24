import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
// import Counter from "./components/Score"
import "./App.css";


export default class App extends Component {

  state = {
    friends: friends,
    score: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
          <Wrapper>
            <h1 className="title">Clicky Game
            <div className="card text-center">
        <div className="card-header bg-primary text-white">
        </div>
        <div className="card-body">
          <p className="card-text">Your Score: {this.state.score}</p>
        </div>
      </div></h1>
            
      
            {this.state.friends.map(friend => {
              return(
                <div onClick={this.handleIncrement}>
                <FriendCard key={friend.id} type={friend} />
                </div>
              )
            })}
          </Wrapper>
        );
  };


}


