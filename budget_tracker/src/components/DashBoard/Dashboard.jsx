import React, { useState } from 'react';
import './dashboard.css';
import Transactionlist from "../Transaction_list/Transaction_list"
import Budget from "../Budget_Dashboard/Budget"
import NewTransactionForm from "../TransactionForm/NewTransactionForm"

function Dashboard() {
  const [showform, setShowForm] = useState(false);
  const [budget,setBudget] = useState(1000);
//   const [transaction, setTransaction] = useState({
//     payer: null,
//     splitUsers: [],
//     category: null,
//     amount: 0,
//     date: new Date()
// });

const transactions = [
  { id: 12, name: 'Shirt', cost: 40 ,datetime:"11/1/22",users:["0"],opt_out: "Shiva",group:"Football",Category:"Shopping"},
  { id: 13, name: 'holiday', cost: 400,datetime:"2/2/22",users:["Shiva","Raju"],opt_out: false,group:"Family",Category:"Traveling" },
  { id: 15, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 16, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 17, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 18, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 19, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 20, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 21, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
  { id: 22, name: 'car service', cost: 50,datetime:"3/3/22",users:["0"],opt_out: "Shekar",group:"Individual",Category:"Mechanical" },
];

const totalExpenses = transactions.reduce((total, item) => {
  return (total = total + item.cost);
}, 0);

const showForm = () => {
  setShowForm(!showform);
}
  return (
    <div className='gradient-bg blur'>
        <div className="navbar">
            <div id='title'>Money Tracker</div>
            <div >
            <button className='logout-btn' >Logout</button>
            </div>
        </div>
            <Budget budget={budget} totalExpenses={totalExpenses} transactions={transactions}/>
       <div> 
        <button className="add-transaction"onClick={showForm}>Add Transaction</button>
        </div>
          {showform && <NewTransactionForm/>}
       <div className='search-box'> <input type={"search"} id="search-input"/> 
       <button id='search-btn'>Search</button></div>
        <Transactionlist transactions={transactions}/>
    </div>
  );
}

export default Dashboard;
