import React from 'react'
import Voting from './voting'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCbhs-O-22aTYPB8fsgdjM43ZFcHBf2vMw",
    authDomain: "voting-app-71003.firebaseapp.com",
    databaseURL: "https://voting-app-71003.firebaseio.com",
    projectId: "voting-app-71003",
    storageBucket: "voting-app-71003.appspot.com",
    messagingSenderId: "563248889053"
  };
  firebase.initializeApp(config);
 
class Main extends React.Component{

       
        
    
    render(){
        return(
            <div>
<h1>VOTING APP FOR ELECTION</h1>
<Voting />
            </div>
        )
    }
}
export default Main