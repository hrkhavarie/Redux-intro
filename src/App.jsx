import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import { useSelector } from "react-redux";
// import logo from process.env.PUBLIC_URL+'../public/logo192.png';

function App() {
  const fullname = useSelector((store)=>store.customer.fullname); 
  return (
    <div className="font-roboto sm:w-[100%] md:w-[1024px] mx-auto">
      <div className="w-full h-20 bg-blue-600 flex justify-center items-center">
      <img src={process.env.PUBLIC_URL+"/logo192.png"} className="w-14" alt="" />
      <h1 className="text-slate-300 font-semibold text-xl"> The React-Redux Bank ⚛️</h1>
      </div>
      
      {fullname ==="" ?
      <CreateCustomer /> :
      <div className="bg-gray-200 px-4 py-4 h-screen">

      <Customer /> 
      <AccountOperations />
      </div>
    }
    </div>
  );
}

export default App;
