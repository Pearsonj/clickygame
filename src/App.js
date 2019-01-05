import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

export default class App extends Component {

  state = {
    friends: friends,
    score: 0,
    highScore: 0
  };

  // handleIncrement increments this.state.count by 1
  shuffleFriends = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  this.setState({friends: friends});
  }

  handleIncrement = (id) => {
    let friends = this.state.friends;
    let index;
    for(let i = 0; i < friends.length; i++) {
      if(friends[i].id === id) {
        index = i; 
      }
    } 
    if(friends[index].click){
      this.setState({ score: 0});
      friends.forEach((friend) => {
        friend.click = false;
      })
    }else{
      if(this.state.score >= this.state.highScore){
        this.setState({ score: this.state.score + 1 });
        this.setState({ highScore: this.state.highScore + 1});
        }else{
          this.setState({score: this.state.score + 1});
        }
    friends[index].click = true;
    }

    this.shuffleFriends(friends);
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
          <p className="card-text">High Score: {this.state.highScore}</p>
        </div>
      </div>
      </h1>
      
            {this.state.friends.map(friend => {
              return(
                <FriendCard key={friend.id} type={friend} handleIncrement={this.handleIncrement} />
              )
            })}
          </Wrapper>
        );
  };
}


