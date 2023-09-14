import { useSelector } from "react-redux";

function Customer() {
   const customer = useSelector((store)=>store.customer)
  //  const account = useSelector((store=>store.account))
   //console.log(customer);
  return <>
  <div>👋 Welcome, <b>
    {customer.fullname} 
    </b> 
    , National ID: <b>{customer.nationalId}</b>  , 
     Acount Created: <b>{customer.createdAt.toString()}</b>  
  </div>
  </>
}

export default Customer;
