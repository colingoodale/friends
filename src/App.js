import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import enemies from "./enemies.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    enemies
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  removeEnemy = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const enemies = this.state.enemies.filter(enemy => enemy.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ enemies });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        <Title>Enemies List</Title>
        {this.state.enemies.map(enemy => (
          <FriendCard
            removeFriend={this.removeEnemy}
            id={enemy.id}
            key={enemy.id}
            name={enemy.name}
            image={enemy.image}
            occupation={enemy.occupation}
            location={enemy.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
