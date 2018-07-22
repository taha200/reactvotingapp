import React, { Component } from 'react'
import pic from '../PMLN-2-1-1.jpg'

export default class Pmln extends Component {
  constructor(props){
    super(props)
    this.state = {
      voteval:0
    }
  }
  render() {
    return (
      <div>
        <img src={pic} width="300px" height="300px" onClick={()=>this.props.votePMLN(++this.state.voteval)}/>
        <h2>VOTE COUNT FOR PMLN = {this.props.vote}</h2>
      </div>
    )
  }
}
