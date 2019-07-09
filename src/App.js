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
    topScore: 0,
    clickedAvengers: []
  };

  handleClick = (id) => {
    //first we must capture the Avengers id then then check if in the clickedAvenger array 
    const clickedCard = id;
    const currentAvenger = this.state.clickedAvengers.indexOf(clickedCard) > -1;
    console.log(clickedCard);
    //what to do if the Avenger has already been clicked
    if (currentAvenger) {
      //radomly sort Avengers also update score and clickedAvenger array
      this.setState({
        Avengers: this.state.Avengers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedAvengers: [],
        score: 0
      });
      
      //add You lose effect
      alert("You already selected that character.  Try again.");
           
        //update topscore if new top score   
        if(this.state.score > this.state.topScore){
          this.setState({
            topScore: this.state.score
          });
        }
    } else {
      //radomly sort Avengers, update score, and concat to clickedAvengers array
      this.setState({
        Avengers: this.state.Avengers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        score: this.state.score + 1,
        clickedAvengers: this.state.clickedAvengers.concat(clickedCard)
      });

      //what to do if users successfully clicks all 12
      if (this.state.score === 11) {
        //radomly sort Avengers, reset score, and empty clickedAvenger array
        this.setState({
          Avengers: this.state.Avengers.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAvengers: [],
          score: 0
        });

        //add winner effect
        alert("Wow, you have a great memory!  Want to play again.")

        //update topscore if new top score   
        if(this.state.score > this.state.topScore){
          this.setState({
            topScore: this.state.score + 1
          });
        }
      }
    }
  };

  // Map over this.state.avengers and render a AvengerCard component for each avenger object
  render() {
    return (
      <Wrapper>
      <Navbar score={this.state.score} topScore={this.state.topScore}/>
      <Section>
          {this.state.Avengers.map(Avenger => (
            <AvengerCard
              id={Avenger.id}
              key={Avenger.id}
              image={Avenger.image}
              handleClick={this.handleClick}
              clicked={Avenger.clicked}
            />
          ))}
      </Section>
      </Wrapper>
    );
  }
}

export default App;
