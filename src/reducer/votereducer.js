
const reducervote=(state={
    MQM:0,
    PTI:0,
    PMLN:0,
    PPP:0,
    total:0
},action)=>{
    switch(action.type){
        case 'MQM':
        return Object.assign({},state,{
            MQM:action.payload
        })
        case 'PMLN':
        return Object.assign({},state,{
                PMLN:action.payload
        })
                case 'PTI':
                return Object.assign({},state,{
                    PTI:action.payload})
                    case 'PPP':
                    return Object.assign({},state,{
                        PPP:action.payload
                    
        })
        case 'TOTAL':
        return Object.assign({},state,{
            total:action.payload})
        default:
        return state
    }
}
export default reducervote