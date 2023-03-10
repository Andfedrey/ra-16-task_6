import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', city: '', timeZone: ''};
    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  changeHandle(event) {
    const {name, value} = event.target;
    this.setState({...this.state, [name]: value})
  }

  submitHandle(event) {
    event.preventDefault();
    this.props.changeClocksHandle(this.state);
    this.setState({city: '', timeZone: ''})
  }

  render() {
  return (
      <div>
        <form onSubmit={this.submitHandle}>
          <label htmlFor='city'>Название:</label>
          <input name='city' onChange={this.changeHandle} type='text' id='city' value={this.state.city}></input>
          <label htmlFor='timeZone'>Временная зона:</label>
          <input name='timeZone' onChange={this.changeHandle} type='text' id='timeZone' value={this.state.timeZone}></input>
          <button onClick={() => true}>Добавить</button>
        </form>
      </div>
    )
  }
}
