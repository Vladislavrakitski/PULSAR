import React, { Component } from 'react';
import Menu from './menu.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

export default class App extends Component{
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    degCounter: 0,
    red: 150,
    green: 100,
    blue: 100,
    roof: 150,
    floor: 100,
    currentTime: 0
  }

  setTime() {
    const date = new Date();
    const timeOptions = {hour: '2-digit', minute:'2-digit', second:'2-digit'};
    const currentTime = date.toLocaleTimeString([], timeOptions);

    this.getColor();

    this.setState({
      currentTime: currentTime
    })
  }

  componentWillMount() {
    this.setTime()
  }

  componentDidMount() {
    window.setInterval(function () {
      this.setTime()
    }.bind(this), 30)
  }

  getColor() {

    let c1 = this.state.counter1;
    let c2 = this.state.counter2;
    let c3 = this.state.counter3;
    let dG = this.state.degCounter;
    let r = this.state.red; // red spectrum   (floor < r < roof)
    let g = this.state.green; // green spectrum (floor < g < roof)
    let b = this.state.blue; // blue spectrum  (floor < b < roof)
    let roof = this.state.roof;
    let floor = this.state.floor;

    if (r == roof && g < roof && b == floor) { c1++; g++ }
    else if (r > floor && g == roof && b == floor) { c2++; r-- } 
    else if (r == floor && g == roof && b < roof) { c3++; b++ } 
    else if (r == floor && g > floor && b == roof && c1 > 0) { c1--; g-- }
    else if (r < roof && g == floor && b == roof && c2 > 0) { c2--; r++ }
    else if (r == roof && g == floor && b > floor && c3 > 0) { c3--; b-- }
    if (dG > 360) dG = 0;
    dG+=1;

    let colors = {
      //all possible combinations of three spectra
      c01 : `rgb(${r}, ${r}, ${r})`,
      c02 : `rgb(${r}, ${r}, ${g})`,
      c03 : `rgb(${r}, ${r}, ${b})`,
      c04 : `rgb(${r}, ${g}, ${r})`,
      c05 : `rgb(${r}, ${g}, ${g})`,
      c06 : `rgb(${r}, ${g}, ${b})`,
      c07 : `rgb(${r}, ${b}, ${r})`,
      c08 : `rgb(${r}, ${b}, ${g})`,
      c09 : `rgb(${r}, ${b}, ${b})`,
      c10 : `rgb(${g}, ${r}, ${r})`,
      c11 : `rgb(${g}, ${r}, ${g})`,
      c12 : `rgb(${g}, ${r}, ${b})`,
      c13 : `rgb(${g}, ${g}, ${r})`,
      c14 : `rgb(${g}, ${g}, ${g})`,
      c15 : `rgb(${g}, ${g}, ${b})`,
      c16 : `rgb(${g}, ${b}, ${r})`,
      c17 : `rgb(${g}, ${b}, ${g})`,
      c18 : `rgb(${g}, ${b}, ${b})`,
      c19 : `rgb(${b}, ${r}, ${r})`,
      c20 : `rgb(${b}, ${r}, ${g})`,
      c21 : `rgb(${b}, ${r}, ${b})`,
      c22 : `rgb(${b}, ${g}, ${r})`,
      c23 : `rgb(${b}, ${g}, ${g})`,
      c24 : `rgb(${b}, ${g}, ${b})`,
      c25 : `rgb(${b}, ${b}, ${r})`,
      c26 : `rgb(${b}, ${b}, ${g})`,
      c27 : `rgb(${b}, ${b}, ${b})`
    }

    this.setState({
      counter1: c1,
      counter2: c2,
      counter3: c3,
      degCounter: dG,
      red: r,
      green: g,
      blue: b,
      roof: roof,
      floor: floor,
      colors: colors,
    })
  }

  render(){
    return(
      <div className='board' style={{backgroundImage: `linear-gradient(${45}deg, ${this.state.colors.c08}, ${this.state.colors.c17}, ${this.state.colors.c07})`}}>
        <h1>PULSAR CLOCK</h1>
        <p>{this.state.currentTime}</p>
        <Menu />
      </div>
    )
  }
}


