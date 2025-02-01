import React from 'react';

function Budget({budget,totalExpenses,transactions}) {
  return (
    <div className="Card-Container">
       <section className="total-budget">
              <h4>Total Budget</h4>
              <span>{budget}$</span>
            </section>
            <section className="total-budget">
              <h4>Remaining Budget</h4>
              <span>{budget - totalExpenses}$</span>
            </section>
            <section className="remaining-budget">
              <h4>Total Spent</h4>
              <span>{totalExpenses}$</span>
            </section>
            <section className="transaction">
              <h4>Transactions</h4>
              <span>{transactions.length}</span>
            </section>
    </div>
  );
}

export default Budget;
