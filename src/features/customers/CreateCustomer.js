import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";
import Button from "../../ui/Button";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

 const dispatch = useDispatch() ; 

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName , nationalId));

  }

  return (
    <div className="bg-slate-200 h-screen px-5 py-5 ">
      <h2 className="mb-5 text-center font-semibold text-lg">Create new customer</h2>
      <div className="">
        <div className="space-x-2 mb-3 w-full  flex justify-start items-center" >
          <label className="w-[100px] capitalize"> full name</label>
          <input
           className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="space-x-2 mb-3 w-full  flex justify-start items-center">
          <label className="w-[100px] capitalize">National ID</label>
          <input
          className=" input "
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <Button className='' onClick={handleClick}>Create new customer</Button>
      </div>
    </div>
  );
}

export default Customer;
