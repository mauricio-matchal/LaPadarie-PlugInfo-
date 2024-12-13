import React from "react";
import { default as Person2 } from "./icons/Person2";
import "../app/globals.css";
interface TransactionProps {
  // Define any props for your component here
  amount: string;
}

const Transaction: React.FC<TransactionProps> = ({ amount }) => {
  return (
    <div id="transactionQ" className="bg-white max-w-[100%] h-[136px] flex flex-col justify-between p-[25px] pt-[20px] pb-[18px] rounded-md font-sans">
      <div className="text-base flex flex-row justify-between items-center">
        <p>Pessoas na fila</p>
        <Person2 />
      </div>
      <div className="text-4xl font-medium">{amount}</div>
    </div>
  );
};

export default Transaction;
