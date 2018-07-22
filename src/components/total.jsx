import React, { Component } from 'react'

export default class Total extends Component {
constructor(props){
    super(props);
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
