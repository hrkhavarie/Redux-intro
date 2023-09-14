
const intialStateCustomer = {
    fullname : "" , 
    nationalId: "" , 
    createdAt : ""
}


export default function customerReducer(state = intialStateCustomer , action){

    switch (action.type){
        case "customer/createCustomer" : {
            return {
                ...state , fullname: action.payload.fullname , 
                nationalId : action.payload.nationalId ,
                createdAt : action.payload.createdAt , 
            }
        }

        case "customer/updateCustomer" : {
            return {
                ...state , fullname : action.payload.fullname , 
                nationalId : action.payload.nationalId ,

            }
        }

        default: 
        return state;
        
    }

}

// action creator for customer

export function createCustomer(fullname , nationalId){
    return {type: "customer/createCustomer" , 
        payload: {fullname, nationalId , createdAt: new Date().toISOString() } }
}

export function updateCustomer(fullname , nationalId){
    return {type: "customer/updateCustomer" , payload: {fullname , nationalId}}
}

