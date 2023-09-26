import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import Button from "../../ui/Button";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
const dispatch = useDispatch();
const {loan , balance } = useSelector((store)=>store.account);
// const balance = useSelector((store)=>store.account.balance);
const loanpurpose = useSelector((store)=>store.account.loanPurpose)
  function handleDeposit() {
    if(!depositAmount) return;
     dispatch(deposit(depositAmount , currency)); 
     setDepositAmount("");
     //setCurrency("")
  }

  function handleWithdrawal() {
    if(!withdrawalAmount) return;
    
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    dispatch(requestLoan(loanAmount , loanPurpose));
    console.log(loanPurpose);
    setLoanAmount("");
    setLoanPurpose("")
  }

  function handlePayLoan() {
    dispatch(payLoan());
    setLoanAmount("");
    
  }

  return (
    <div className="my-5 w-full font-roboto">
      <h2 className="font-semibold text-lg">Your account operations</h2>
      <div className="flex flex-col">
        <div className="sm:flex sm:justify-start sm:items-center w-full  my-2">
            <label className="capitalize font-semibold sm:mb-5 block ">Deposit</label>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
              className="input h-10 sm:mb-5 "
              />
              <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="focus:outline-none focus:ring focus:ring-blue-300 focus-ring-offset-2 mb-5 mx-3 rounded-xl h-10 "
                  >
                  <option className="inline-block m-2 p-2" value="USD">US Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="GBP">British Pound</option>
                </select>
              <div className="flex justify-between">
                

                <Button className='inline-block ' onClick={handleDeposit}>Deposit {depositAmount}</Button>
              </div>
        </div>

        <div className="sm:flex sm:justify-start sm:items-center w-full   my-2">
          <label className="capitalize font-semibold sm:mb-5 block ">Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
            className="input mr-3"
          />
          <Button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </Button>
        </div>

        <div className="sm:flex sm:justify-start  sm:items-center w-full  ">
          <label className="capitalize font-semibold mb-5 block w-[100px] ">Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
            className="input mr-3 "
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            className="input mr-3"
          />
          <Button onClick={handleRequestLoan}>Request loan</Button>

        </div>
        
        <div className="">


       { balance > 0  &&( <div className=" flex justify-between  items-center sm:space-x-4 space-x-2 text-lg w-full">
          <div className=" flex flex-col   mr-4"><sapn>Balance: <b>${balance}</b></sapn> <span> Loan:  <b>${loan}</b></span>  <span> Purpose:  <b> {loanpurpose}</b></span></div>
          <Button onClick={handlePayLoan}>Pay loan</Button>
        </div>)}
    
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
