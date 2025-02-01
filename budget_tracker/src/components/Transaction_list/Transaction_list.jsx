import React from 'react';
import {Table  } from 'react-bootstrap'

function Transactionlist({transactions}) {
  return (
       <div className="transaction-list">
        <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Total Cost</th>
                        <th>Date and Time</th>
                        <th>Users</th>
                        <th>Group</th>
                        <th>Opt-out</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                           return <tr key={transaction.id}>
                                <td>{index + 1}</td>
                                <td>{transaction.name}</td>
                                <td>{transaction.cost}</td>
                                <td>{transaction.datetime}</td>
                                <td>
                                    {transaction.users.map((user,i) => {
                                      let words = user.split(" ");
                                        return words + ', '
                                    })}
                                </td>
                                <td>{transaction.group}</td>
                                <td>{transaction.opt_out ? transaction.opt_out:0}</td>
                                <td>{transaction.Category}</td>
                            </tr>
                            })
                          }
                </tbody>
              </Table>
    </div>
  );
}

export default Transactionlist;
 