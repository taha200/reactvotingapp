import React, { Component } from 'react'
import Mqm from './mqm'
import Pmln from './pmln'
import Ppp from './ppp'
import Pti from './pti'
import {connect} from 'react-redux'
import Total from './total'
class Voting extends Component {
  render() {
    return (
      <div>
        <Mqm vote={this.props.redvoter.MQM} voteMQM={this.props.mqmVote} />
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
    dispatch({
      type:'MQM',
      payload:num
    })
   },
   pppVote:(num)=>{
    dispatch({
      type:'PPP',
      payload:num
    })
   }
   ,
   pmlnVote:(num)=>{
    dispatch({
      type:'PMLN',
      payload:num
    })
   }
   ,
   ptiVote:(num)=>{
    dispatch({
      type:'PTI',
      payload:num
    })
   }
})
}

export default connect(mapSetToState,mapDispatchToProps)(Voting)