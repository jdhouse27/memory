import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Section from "./components/Section";
import AvengerCard from "./components/AvengerCard";
import Avengers from "./avengers.json";


class App extends Component {
  // Setting this.state.avengers to the avengers json array
  state = {
    Avengers,
    score: 0
  };

  // Map over this.state.avengers and render a AvengerCard component for each avenger object
  render() {
    return (
      <Wrapper>
      <Navbar score={this.state.score} />
      <Section>
          {this.state.Avengers.map(Avenger => (
            <AvengerCard
              id={Avenger.id}
              key={Avenger.id}
              image={Avenger.image}
            />
          ))}
      </Section>
      </Wrapper>
    );
  }
}

export default App;
