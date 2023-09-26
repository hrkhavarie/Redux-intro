import { useSelector } from "react-redux";
import BalanceDisplay from "../accounts/BalanceDisplay";

function Customer() {
   const customer = useSelector((store)=>store.customer)
  //  const account = useSelector((store=>store.account))
   //console.log(customer);
  return <>
  <div className="bg-slate-300 rounded-lg border border-blue-300 p-2 flex justify-between items-center"> 
  <p>

  Welcome, <b>
    {customer.fullname} 
    </b> 
  </p>
    <p>
    , National ID: <b>{customer.nationalId}</b>  , 
    </p>
    <p>
     Acount Created: <b>{customer.createdAt.toString()}</b>  
    </p>
    <BalanceDisplay/>
  </div>
  </>
}

export default Customer;
