import React, { Component } from 'react'
import pic from '../Pakistan_Tehreek-e-Insaf_logo.svg.png'

export default class Pti extends Component {
  constructor(props){
    super(props)
    this.state = {
      voteval:0
    }
  }
  render() {
    return (
      <div>
        <img src={pic} width="300px" height="300px" onClick={()=>this.props.votePTI(++this.state.voteval)}/>
        <h2>VOTE COUNT FOR PTI = {this.props.vote}</h2>
      </div>
    )
  }
}
