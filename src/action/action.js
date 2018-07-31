// import firebase from 'firebase'

// export const mqmVota=(num,cond,em)=>{
//     const firebaseref=firebase.database().ref().child('Voting').child('MQM')
//     firebaseref.set(num)
// if(cond){
//     const refsa=firebase.database().ref().child('Users').child(em).child('hasvoted')
//     refsa.transaction((current)=>{
//       current=true;
//       return current
//     })
// }
// return ({
//     type:'MQM',
//     payload:num
// })
// }