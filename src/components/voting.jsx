import React, { Component } from 'react'
import Mqm from './mqm'
import Pmln from './pmln'
import Ppp from './ppp'
import Pti from './pti'
import {connect} from 'react-redux'
import Total from './total'
import firebase from 'firebase'
import store from '../store'
class Voting extends Component {
  componentWillMount(){
    const firebaseref=firebase.database().ref().child('Voting')
    firebaseref.on('value',(snap)=>{
    const a=snap.val()
   this.props.mqmVote(a.MQM)
   this.props.pmlnVote(a.PMLN)
   this.props.pppVote(a.PPP)
   this.props.ptiVote(a.PTI)
    })
}
  render() {
    return (
      <div>
        <Mqm vote={this.props.redvoter.MQM} voteMQM={this.props.mqmVote}  />
        <Pmln vote={this.props.redvoter.PMLN} votePMLN={this.props.pmlnVote}/>
        <Ppp vote={this.props.redvoter.PPP} votePPP={this.props.pppVote}/>
        <Pti vote={this.props.redvoter.PTI} votePTI={this.props.ptiVote} />
        <Total red={this.props.redvoter}  />
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
    const firebaseref=firebase.database().ref().child('Voting').child('MQM')
    firebaseref.set(num)
    dispatch({
      type:'MQM',
      payload:num
    })
   },
   pppVote:(num)=>{
   const firebaseref=firebase.database().ref().child('Voting').child('PPP')
  firebaseref.set(num)
    dispatch({
      type:'PPP',
      payload:num
    })
   }
   ,
   pmlnVote:(num)=>{
    const firebaseref=firebase.database().ref().child('Voting').child('PMLN')
    firebaseref.set(num)
    dispatch({
      type:'PMLN',
      payload:num
    })
   }
   ,
   ptiVote:(num)=>{
    const firebaseref=firebase.database().ref().child('Voting').child('PTI')
    firebaseref.set(num)
    dispatch({
      type:'PTI',
      payload:num
    })
   }
})
}

export default connect(mapSetToState,mapDispatchToProps)(Voting)