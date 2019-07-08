import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import avengers from "./avengers.json";

class App extends Component {
  // Setting this.state.avengers to the avengers json array
  state = {
    avengers
  };

  // Map over this.state.avengers and render a AvengerCard component for each avenger object
  render() {
    return (
      <Wrapper>
        <Title>Avengers List</Title>
        {this.state.avengers.map(avenger => (
          <AvengerCard
            id={avenger.id}
            key={avenger.id}
            image={avenger.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
