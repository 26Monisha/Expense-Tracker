import React from 'react';
import './TransactionHistory.css'

function TransactionHistory({ transactions, onDeleteTransaction }) {
    return (
        <>
           <div className='history'>
            <h2 className='trans-text'>Transaction History</h2>
            <div className='trans-layout'>
            <div className='transactions'>
            <ul className='item-list'>
                {
                    transactions.map((data) => 
                        <li key={data.id}>
                            <div>{data.name}</div>
                            <div>
                                <span>${data.amount}</span>
                                <button onClick={() => onDeleteTransaction(data.id)} className='delete-btn'>x</button>
                            </div>
                        </li>
                    )
                }
            </ul>
            </div>
            </div>
            </div>
        </>
    )
}

export default TransactionHistory;