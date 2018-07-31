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
SignOuta(propa){
  firebase.auth().signOut()
	
  .then(function() {
propa.push('/')
     console.log('Signout Succesfull')
  }, function(error) {
     console.log('Signout Failed')  
  });
}


  render() 
   {
let a=this.props.vote
    return (
      <div>
        <img src={pic} onClick={()=>{this.SignOuta(this.props.prop)
         this.props.voteMQM(++a,true)
         } }/>
        <h2>VOTE COUNT FOR MQM = {this.props.vote}</h2>
      </div>
    )
  }
}
