import React, { Component } from 'react'
import pic from '../MQMworld.png'
import firebase from 'firebase'
export default class Mqm extends Component {
constructor(props){
  super(props)
  this.state = {
    voteval:0
  }
}
  render() 
   {
let a=this.props.vote
let b=this.props.vota
    return (
      <div>
        <img src={pic} onClick={()=>{          this.props.voteMQM(++a)
          this.props.vtot(++b)
         } }/>
        <h2>VOTE COUNT FOR MQM = {this.props.vote}</h2>
      </div>
    )
  }
}
