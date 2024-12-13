
import React from "react";
import { default as Cart } from "./icons/Cart";
import "../app/globals.css";
interface TransactionProps {
  // Define any props for your component here
  amount: string;
}

const Transaction: React.FC<TransactionProps> = ({ amount }) => {
  return (
    <div id="transactionB" className="bg-white max-w-[100%] h-[136px] flex flex-col justify-between p-[25px] pt-[20px] pb-[18px] rounded-md font-sans">
      <div className="text-base flex flex-row justify-between items-center">
        <p>Pães vendidos</p>
        <Cart />
      </div>
      <div className="text-4xl font-medium">{amount}</div>
    </div>
  );
};

export default Transaction;
