import React, { Component } from 'react'
import Mqm from './mqm'
import Pmln from './pmln'
import Ppp from './ppp'
import Pti from './pti'
import {connect} from 'react-redux'
import Total from './total'
import firebase from 'firebase'
import store from '../store'
import {mqmVota} from '../action/action'
let email;
class Voting extends Component {
  constructor(props){
    super(props);
  }
  signOuta(propa){
    console.log(propa)
    firebase.auth().signOut()
	
    .then(function() {
  propa.history.push('/')
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
  }
  componentWillMount(){
 email=this.props.match.params.user
//    console.log(email)
// var newUser=this.props.redvoter
// console.log(newUser)
//  const mqvota=this.props.mqmVote
// const pmlvota= this.props.pmlnVote
//   const pppvota= this.props.pppVote
//   const ptivota= this.props.ptiVote
//   const  tot=this.props.totala

   var reference = firebase.database().ref().child('Voting')
        reference.on('value',(snap)=> {
            var data = snap.val();
       this.props.mqmVote(data.MQM,false)
       this.props.pmlnVote(data.PMLN,false)
       this.props.pppVote(data.PPP,false)
       this.props.ptiVote(data.PTI,false)
            }
        )
        var refx = firebase.database().ref().child('Users').child(email)
        refx.once('value',data =>{
          var datam=data.val()
          if(datam){
            console.log(datam)
          }
          else{
            var obj = {}
            obj.hasvoted=false
            refx.set(obj)
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
        <Mqm vote={this.props.redvoter.MQM} voteMQM={this.props.mqmVote} prop={this.props.history}/>
        <Pmln vote={this.props.redvoter.PMLN} votePMLN={this.props.pmlnVote} prop={this.props.history} />
        <Ppp vote={this.props.redvoter.PPP} votePPP={this.props.pppVote} prop={this.props.history} />
        <Pti vote={this.props.redvoter.PTI} votePTI={this.props.ptiVote} prop={this.props.history} />
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
   mqmVote:(num,cond)=>{
      const firebaseref=firebase.database().ref().child('Voting').child('MQM')
    firebaseref.set(num)
if(cond){
    const refsa=firebase.database().ref().child('Users').child(email).child('hasvoted')
    refsa.transaction((current)=>{
      current=true;
      return current
    })
  }
  dispatch({
    type:'MQM',
    payload:num
  })
 },
   pppVote:(num,cond)=>{
   const firebaseref=firebase.database().ref().child('Voting').child('PPP')
  firebaseref.set(num)
  if(cond){
    const refsa=firebase.database().ref().child('Users').child(email).child('hasvoted')
    refsa.transaction((current)=>{
      current=true;
      return current
    })
  }
    dispatch({
      type:'PPP',
      payload:num
    })
   },
  pmlnVote:(num,cond)=>{
    const firebaseref=firebase.database().ref().child('Voting').child('PMLN')
    firebaseref.set(num)
    if(cond){
      const refsa=firebase.database().ref().child('Users').child(email).child('hasvoted')
      refsa.transaction((current)=>{
        current=true;
        return current
      })
    }
    dispatch({
      type:'PMLN',
      payload:num
    })
   }
   ,
   ptiVote:(num,cond)=>{
    const firebaseref=firebase.database().ref().child('Voting').child('PTI')
    firebaseref.set(num)
    if(cond){
      const refsa=firebase.database().ref().child('Users').child(email).child('hasvoted')
      refsa.transaction((current)=>{
        current=true;
        return current
      })
    }
    dispatch({
      type:'PTI',
      payload:num
    })
   }
})
}

export default connect(mapSetToState,mapDispatchToProps)(Voting)