import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


import accountReducer from "./features/accounts/accountSlice" ;
import customerReducer from "./features/customers/customerSlice";




const rootReducer = combineReducers({
    account: accountReducer , 
    customer : customerReducer
})

const store = createStore(rootReducer , applyMiddleware(thunk)); 

export {  store}







// store.dispatch(deposit(500));
// console.log(store.getState());

// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan(1000 , "buy a car"));
// console.log(store.getState()); 

// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("Hamid" , "1223455"))
// console.log(store.getState());