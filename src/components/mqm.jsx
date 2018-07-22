import React, { Component } from 'react'
import pic from '../MQMworld.png'

export default class Mqm extends Component {
constructor(props){
  super(props)
  this.state = {
    voteval:0
  }
}
  render() {
    return (
      <div>
        <img src={pic} onClick={()=>this.props.voteMQM(++this.state.voteval)}/>
        <h2>VOTE COUNT FOR MQM = {this.props.vote}</h2>
      </div>
    )
  }
}
