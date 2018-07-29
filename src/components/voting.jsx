import React, { Component } from 'react'
import Mqm from './mqm'
import Pmln from './pmln'
import Ppp from './ppp'
import Pti from './pti'
import {connect} from 'react-redux'
import Total from './total'
import firebase from 'firebase'
import store from '../store'
let em;
class Voting extends Component {
  constructor(props){
    super(props);
  }
  signOuta(propa){
    firebase.auth().signOut()
	
    .then(function() {
  propa.history.push('/')
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
  }
  componentWillMount(){
   let email=this.props.match.params.user
var newUser=this.props.redvoter
console.log(newUser)
 const mqvota=this.props.mqmVote
const pmlvota= this.props.pmlnVote
  const pppvota= this.props.pppVote
  const ptivota= this.props.ptiVote
  const  tot=this.props.totala
    em=email.split('@')
    console.log(em)
   var reference = firebase.database().ref().child(em[0])
        reference.on('value',function (snap) {
            var data = snap.val();
            console.log(data)
            if (data) {
             mqvota(data.MQM)
            pmlvota(data.PMLN)
             pppvota(data.PPP)
             ptivota(data.PTI)
             tot(data.total)
            }
            else {
reference.set(newUser);
            }
        })
    }
   
//   firebaseref.on('value',(snap)=>{
//   const a=snap.val()
//     console.log(a)
//     if(a){
//       firebaseref.set(this.props.redvoter)
//      }
// console.log(a)
  //  this.props.mqmVote(a.MQM)
  //  this.props.pmlnVote(a.PMLN)
  //  this.props.pppVote(a.PPP)
  //  this.props.ptiVote(a.PTI)
   // })

  
    

  render() {
    return (
      <div>
        <h1>{this.props.match.params.user}</h1>
        <Mqm vote={this.props.redvoter.MQM} voteMQM={this.props.mqmVote} vtot={this.props.totala} vota={this.props.redvoter.total} />
        <Pmln vote={this.props.redvoter.PMLN} votePMLN={this.props.pmlnVote}  vtot={this.props.totala} vota={this.props.redvoter.total}/>
        <Ppp vote={this.props.redvoter.PPP} votePPP={this.props.pppVote}  vtot={this.props.totala} vota={this.props.redvoter.total}/>
        <Pti vote={this.props.redvoter.PTI} votePTI={this.props.ptiVote} vtot={this.props.totala} vota={this.props.redvoter.total} />
        <Total red={this.props.redvoter}/>
        <button onClick={()=>this.signOuta(this.props)}>SIGN OUT</button>
      </div>
    )
  }
}
function mapSetToState(state){
  return({
    redvoter:state.reducervote
  })
}
function mapDispatchToProps(dispatch){
return ({
   mqmVote:(num)=>{
      const firebaseref=firebase.database().ref().child(em[0]).child('MQM')
    firebaseref.set(num)
    dispatch({
      type:'MQM',
      payload:num
    })
   },
   pppVote:(num)=>{
   const firebaseref=firebase.database().ref().child(em[0]).child('PPP')
  firebaseref.set(num)
    dispatch({
      type:'PPP',
      payload:num
    })
   },
  pmlnVote:(num)=>{
    const firebaseref=firebase.database().ref().child(em[0]).child('PMLN')
    firebaseref.set(num)
    dispatch({
      type:'PMLN',
      payload:num
    })
   }
   ,
   ptiVote:(num)=>{
    const firebaseref=firebase.database().ref().child(em[0]).child('PTI')
    firebaseref.set(num)
    dispatch({
      type:'PTI',
      payload:num
    })
   },
   totala:(num)=>{
    const firebaseref=firebase.database().ref().child(em[0]).child('total')
    firebaseref.set(num)
    dispatch({
      type:'TOTAL',
      payload:num
    })
   }
})
}

export default connect(mapSetToState,mapDispatchToProps)(Voting)