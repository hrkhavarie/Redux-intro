const { createStore, combineReducers } = require("redux");



const intialStateAccount =  {
    balance : 0 , 
    loan : 0 , 
    loanPurpose: "" ,
}

const intialStateCustomer = {
    fullname : "" , 
    nationalId: "" , 
    creatAt : ""
}



function accountReducer(state = intialStateAccount , action){

    switch(action.type){
        case "account/deposit" : 
           return {
            ...state ,
            balance: state.balance + action.payload}

        case "account/withdraw" : 
            return {
                ...state
                , balance: state.balance - action.payload };

        case "account/requestLoan":
            if(state.loan>0) return state;

            return {
                ...state , 
                loan: action.payload.amount ,
                loanPurpose:action.payload.purpose , 
                balance: state.balance + action.payload.amount ,
            }
            

        case "account/payLoan" : {
            return {
            ...state ,
            loan : 0 , 
            loanPurpose : '' , 
            balance : state.balance - state.loan , 
        }
        }

            default: 
                return state;


    }

}

function customerReducer(state = intialStateCustomer , action){

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

const rootReducer = combineReducers({
    account: accountReducer , 
    customer : customerReducer
})

const store = createStore(rootReducer); 

// store.dispatch({type : "account/deposit" , payload: 500});
// console.log(store.getState());

// store.dispatch({type: "account/withdraw" , payload: 200})
// console.log(store.getState());

// store.dispatch({type: "account/requestLoan" , payload: {amount: 1000 , purpose : "buy a car"}  });
// console.log(store.getState());

// store.dispatch({type: "account/payLoan"}); 
// console.log(store.getState());


// action creator methods for account
function deposit(amount){
  return  {type : "account/deposit" , payload: amount}

}
function withdraw(amount){
    return {type: "account/withdraw" , payload: amount}

}
function requestLoan(amount , purpose){
    return {type: "account/requestLoan" , payload: {amount, purpose }}
}
function payLoan(){
    return {type: "account/payLoan"}
}

// action creator for customer

function createCustomer(fullname , nationalId){
    return {type: "customer/createCustomer" , 
        payload: {fullname, nationalId , createdAt: new Date().toISOString() } }
}

function updateCustomer(fullname , nationalId){
    return {type: "customer/updateCustomer" , payload: {fullname , nationalId}}
}



store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000 , "buy a car"));
console.log(store.getState()); 

store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("Hamid" , "1223455"))
console.log(store.getState());