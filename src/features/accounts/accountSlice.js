import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    balance : 0 , 
    loan : 0 , 
    loanPurpose: "" ,
    isLoading: false , 
}

const accountSlice = createSlice({
    name: 'account' ,
    initialState,
    reducers:{
        deposit(state , action){
            state.balance += action.payload;
            state.isLoading = false;
        },

  
        withdraw(state , action){

            if(state.balance <= action.payload) return;
            state.balance -= action.payload
        } , 
        requestLoan:{
            prepare(amount , purpose){
                return{
                    payload:{amount , purpose},
                }
            },
            reducer(state , action){
                if(state.loan>0) return
                state.loan = action.payload.amount; 
                state.loanPurpose = action.payload.purpose ; 
                state.balance += state.loan;
                
                
            } , 
        } ,
        payLoan(state){
            state.balance -= state.loan
            state.loan = 0;
            state.loanPurpose = ""
        } ,
        convertingCurrancy(state){
            state.isLoading = true;

        }


    } 

})
 console.log(accountSlice);

// export const { deposit , withdraw , requestLoan , payLoan} = accountSlice.actions;
export const {   withdraw , requestLoan , payLoan} = accountSlice.actions;

export default accountSlice.reducer;

export function deposit(amount , currency){
    if(currency ==="USD")
     return  {type : "account/deposit" , payload: amount}
    return async function(dispatch , getState){
        dispatch({type: "account/convertingCurrancy"})
        //API Call
        const host ='api.frankfurter.app';
        const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
        const data= await res.json();
        const converted = data.rates.USD;
        
        // return action
        dispatch({type : "account/deposit" , payload: converted})

        
    }
  
  }


// reducer function for account
// export default function  accountReducer(state = intialStateAccount , action){

//     switch(action.type){
//         case "account/deposit" : 
//            return {
//             ...state ,
//             balance: state.balance + action.payload}

//         case "account/withdraw" : 
//          if(action.payload <= state.balance) 
//             return {
//                 ...state
//                 , balance: state.balance - action.payload
//             }
//              return state;
                

//         case "account/requestLoan":
//             if(state.loan>0) return state;

//             return {
//                 ...state , 
//                 loan: action.payload.amount ,
//                 loanPurpose:action.payload.purpose , 
//                 balance: state.balance + action.payload.amount ,
//             }
            

//         case "account/payLoan" : {
//             if(state.balance >= state.loan) 
//             return{
//             ...state ,
//             loan : 0 , 
//             loanPurpose : '' , 
//             balance : state.balance - state.loan , 
//         } 
//         return state;
           
//         }

//             default: 
//                 return state;


//     }

// }

// // action creator methods for account
// export function deposit(amount , currency){
//     if(currency ==="USD")
//      return  {type : "account/deposit" , payload: amount}
//     return async function(dispatch , getState){
//         //API Call
//         const host ='api.frankfurter.app';
//         const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
//         const data= await res.json();
//         console.log(data);
//         const converted = data.rates.USD;
        
//         // return action
//         dispatch({type : "account/deposit" , payload: converted})

        
//     }
  
//   }
//  export  function withdraw(amount){
//       return {type: "account/withdraw" ,payload: amount }
  
//   }
//   export function requestLoan(amount , purpose){
//       return {type: "account/requestLoan" , payload: {amount, purpose }}
//   }
//   export function payLoan(){
//       return {type: "account/payLoan"}
//   }
