import React from 'react'
import './clock.css'

export default class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount(){
    this.intervalId = setInterval(() => this.getSecondPlus(), 1000)
  }
  componentDidUpdate() {
  }
  componentWillUnmount(){
    clearInterval(this.intervalId)
  }
  getSecondPlus = () => {
    this.setState(() => ({date: new Date()}))
  }
  deleteClock = () => {
    this.props.deleteClocksHandle(this.props.clockId)
  }

  render() {
    const { date } = this.state;
    let hourNow = this.state.date.getHours() + Number(this.props.timeZone)
    hourNow = (hourNow <= 12)? hourNow : hourNow % 24
    let secondNow = (this.state.date.getSeconds().length === 1) ? `0${this.state.date.getSeconds()}` : this.state.date.getSeconds()
    const secondDegrees = date.getSeconds() * 6;
    const minuteDegrees = date.getMinutes() * 6 + date.getSeconds() / 10;
    const hourDegrees = (hourNow % 12) * 30 + date.getMinutes() / 2;

    return (
      <div>
        <h1>{this.props.city}</h1>
        <h3>{(this.props.timeZone) ?  
          (`${hourNow}:${this.state.date.getMinutes()}:${secondNow}`)
        : this.state.date.toLocaleTimeString()}</h3>
        <div className='clock'>
        <button className='cross' onClick={(e) => this.deleteClock()}>x</button>
          <div className='dote'></div>
          <div className='hours' id='#hour'  style={{transform: ` rotate(${hourDegrees}deg)`}}></div>
          <div className='minutes' id='#minute' style={{transform: ` rotate(${minuteDegrees}deg)`}}></div>
          <div className='seconds' id='#second' style={{transform: `rotate(${secondDegrees}deg)`}}></div>
          {Array.from({length: 12}).map((el, i) => (
            <div className={`num num${i + 1}`} key={i}>{i + 1}</div>
          ))}
        </div>
      </div>
    )
  }
}
