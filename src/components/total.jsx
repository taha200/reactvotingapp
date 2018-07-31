import React, { Component } from 'react'
import firebase from 'firebase'
export default class Total extends Component {
constructor(props){
    super(props);
}
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

    render() {
        let total=this.props.red.MQM+this.props.red.PPP+this.props.red.PMLN+this.props.red.PTI
        this.props.red['total']=total
    return (
      <div>
          <h2>TOTAL VOTES ARE {this.props.red['total']}</h2>
      </div>
    )
  }
}
