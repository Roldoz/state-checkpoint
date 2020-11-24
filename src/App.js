import React, { Component } from 'react';
import './App.css';


class App extends Component {
person = {
  fullName : "Hatem Hamrouni",
  bio : "Normal person, nothing special.",
  imgSrc : "/pic.jpg",
  profession :"Designer"
}
state = {
  toggleShow : false,
  time : 0
}
showHide = () => {
  this.setState({
    toggleShow : !this.state.toggleShow
  })
};
componentDidMount() {
  this.time = setInterval(()=>{
    this.state.toggleShow
    ? this.setState({time: this.state.time +1})
  : this.setState({time : this.state.time})
    },1000)
}

 render() {  
   return (
    <div className="App">
      
      <button onClick={this.showHide}>Show Or Hide</button>
      {this.state.toggleShow ? 
      <><h1>{this.person.fullName} </h1>
      <h3>{this.person.bio} </h3>
      <img src={this.person.imgSrc} width="250px"/>
      <h2>{this.person.profession} </h2></> : <p>Click button to show</p>
      }
      <p>{this.state.time}</p>
    </div>
  )

}}

export default App;
