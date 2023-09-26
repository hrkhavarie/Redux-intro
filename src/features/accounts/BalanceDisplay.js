import { useSelector } from "react-redux";
// function formatCurrency(value) {
//   return new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);
// }


function BalanceDisplay() {
  const balance = useSelector((store)=>store.account.balance)
  console.log(balance);
  return <div className="balance">
    <div className="text-3xl font-semibold">${balance}</div>
    {/* {formatCurrency({balance})} */}
    </div>;
}

export default BalanceDisplay;
