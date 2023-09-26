import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    fullname : "" , 
    nationalId: "" , 
    createdAt: "", 
}

const customerSlice = createSlice({
    name:'customer' , 
    initialState , 
    reducers: {
        createCustomer:{
            prepare(fullname , nationalId){
                return {
                    payload:{
                              fullname , 
                              nationalId , 
                              createdAt: new Date().toISOString() 
                    }
                }
            }, 
            reducer(state , action){
                state.fullname = action.payload.fullname ;
                state.nationalId = action.payload.nationalId ;
                state.createdAt = action.payload.createdAt
            }

        } , 

        updateCustomer(state , action){
            state.fullname = action.payload;
        }
    }

})

export const { createCustomer , updateCustomer } = customerSlice.actions

export default customerSlice.reducer;


// export default function customerReducer(state = initialState , action){

//     switch (action.type){
//         case "customer/createCustomer" : {
//             return {
//                 ...state , fullname: action.payload.fullname , 
//                 nationalId : action.payload.nationalId ,
//                 createdAt : action.payload.createdAt , 
//             }
//         }

//         case "customer/updateCustomer" : {
//             return {
//                 ...state , fullname : action.payload.fullname , 
//                 nationalId : action.payload.nationalId ,

//             }
//         }

//         default: 
//         return state;
        
//     }

// }

// // action creator for customer

// export function createCustomer(fullname , nationalId){
//     return {type: "customer/createCustomer" , 
//         payload: {fullname, nationalId , createdAt: new Date().toISOString() } }
// }

// export function updateCustomer(fullname , nationalId){
//     return {type: "customer/updateCustomer" , payload: {fullname , nationalId}}
// }

