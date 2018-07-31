
import React, { Component } from 'react'
import pic from '../PPP-1.jpg'
import firebase from 'firebase'

export default class Ppp extends Component {
  componentWillMount(){
    if(!firebase.apps.length){
     var config = {
       apiKey: "AIzaSyCbhs-O-22aTYPB8fsgdjM43ZFcHBf2vMw",
       authDomain: "voting-app-71003.firebaseapp.com",
       databaseURL: "https://voting-app-71003.firebaseio.com",
       projectId: "voting-app-71003",
       storageBucket: "voting-app-71003.appspot.com",
       messagingSenderId: "563248889053"
     };
     firebase.initializeApp(config);
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
render() {
    let a=this.props.vote
    let b=this.props.vota
    return (
      <div>
        <img src={pic} width="300px" height="300px" onClick={()=>{this.SignOuta(this.props.prop)
        this.props.votePPP(++a,true)
        }}/>
        <h2>VOTE COUNT FOR PPP = {this.props.vote}</h2>
      </div>
    )
  }
}
