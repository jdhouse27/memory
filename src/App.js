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
    score: 0,
    topscore: 0,
    clickedAvengers: []
  };

  handleClick = (id) => {
    //first we must capture the Avengers id then we can add to the clickAvenger array to compare clicks later
    const clickedAvengers = this.state.clickedAvengers;
   
    //here we determine what to do if the Avenger has already been clicked
    if (clickedAvengers.indexOf(id)) {
      //radomly sort Avengers
      this.setState({
        Avengers: this.state.Avengers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        score: this.state.score + 1
      },
      //what to do when user has clicked all Avengers correctly
        () => {
          if (this.state.score === 12) {
          console.log("Winner");
          //radomly sort Avengers
          this.setState({
            Avengers: this.state.Avengers.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedAvenger: [],
            score: 0
            });
          }
        }
      );
    } else {
      //radomly sort Avengers
      this.setState({
        Avengers: this.state.Avengers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedAvenger: [],
        score: 0
      });
      //add You lose effect
      console.log("you loser!");
    }
  };

  // Map over this.state.avengers and render a AvengerCard component for each avenger object
  render() {
    return (
      <Wrapper>
      <Navbar score={this.state.score} topscore={this.state.topscore}/>
      <Section>
          {this.state.Avengers.map(Avenger => (
            <AvengerCard
              id={Avenger.id}
              key={Avenger.id}
              image={Avenger.image}
              handleClick={this.handleClick}
            />
          ))}
      </Section>
      </Wrapper>
    );
  }
}

export default App;
