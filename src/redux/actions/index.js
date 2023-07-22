export const addTicket=(flight)=>{
    return{
        type:"ADDTICKET",
        payload : flight
    }
}

export const delTicket=(flight)=>{
    return {
        type:"DELTICKET",
        payload : flight 
    }
}