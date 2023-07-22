
const addTicket=[];
const addTickets=(state=addTicket,action)=>{
    switch(action.type){
        case "ADDTICKET" :return[
            ...state,
            action.payload  
       ] 
        break;
        case "DELTICKET" :
    return state=state.filter((x)=>{
        return x.id!==action.payload.id
    })
        break;
        default:return state;
        break;
    }
}
export default addTickets;