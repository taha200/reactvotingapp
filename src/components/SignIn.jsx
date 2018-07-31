import React, { Component } from 'react'
import firebase from 'firebase'
import Voting from './voting'
export default class SignIn extends Component {
   constructor(props){
     super(props);

     }
  googleSignIn(propa)
  {
 const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
         var token = result.credential.accessToken;
         var user = result.user;
         var em = user.email
            var ema=em.split('@')
          console.log(ema[0])
           var reference = firebase.database().ref().child('Users').child(ema[0])
           reference.once('value',function (snap) {
               var data = snap.val();
               console.log(data)
               if (data.hasvoted) {
                propa.history.push('/')
                  }
               else {
                propa.history.push('/voting/'+ema[0])
               }
           })
       
         console.log(token)
         console.log(user)    
      }).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
           
         console.log(error.code)
         console.log(error.message)
      });
    
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.googleSignIn(this.props)}>SIGN IN TO GIVE THE VOTE</button>
      </div>
    )
  }
}
