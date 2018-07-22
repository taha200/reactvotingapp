
import React, { Component } from 'react'
import pic from '../PPP-1.jpg'

export default class Ppp extends Component {
  render() {
    let a=this.props.vote
    return (
      <div>
        <img src={pic} width="300px" height="300px" onClick={()=>this.props.votePPP(++a)}/>
        <h2>VOTE COUNT FOR PPP = {this.props.vote}</h2>
      </div>
    )
  }
}
