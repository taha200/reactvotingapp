import React from 'react'
import Voting from './voting'
import firebase from 'firebase'

 
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