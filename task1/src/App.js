import './App.css';
import Inputs from './Components/Inputs';
import Clock from './Components/Clock/Clock';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import getCheckInput from './getCheckInput';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { arr: [] };
  }
  changeClocksHandle = (arr) => {
    const {city, timeZone} = arr;
    const newClock = {
      city: city.trim(),
      timeZone,
      id: nanoid()
    }
    if(!getCheckInput(newClock)) {
      alert('повторите попытку')
    } else {
      this.setState((prevState) => ({ arr: [...prevState.arr, newClock] }));
    }
  }
  deleteClocksHandle = (id) => {
    this.setState((prev) => ({arr: prev.arr.filter((el) => el.id !== id)}));
  }
  render() {
    let clocksArr = this.state;
    return (
      <div className="App">
        <Inputs clocksArr={clocksArr} changeClocksHandle={this.changeClocksHandle}></Inputs>
        <div className='clocks'>
          {this.state.arr.map((clock) => (
            <Clock key={clock.id} city={clock.city} timeZone={clock.timeZone} clockId={clock.id} deleteClocksHandle={this.deleteClocksHandle}></Clock>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
