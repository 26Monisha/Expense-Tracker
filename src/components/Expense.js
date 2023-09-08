import React from 'react';
import './Expense.css';

function Expense({ income, expense }) {
    return (
        <>
        <div className='Transaction-card'>
        <div className='displaybar'>
            <span className='balance'>
            <h2>Your Balance</h2>
            <div className='balance-text'>${income - expense}</div>
            </span>
       </div>
                <div className='displaybar'>
                    <span class='income'>
                        <h2>Income</h2>
                        <div className='income-text'>${income}</div>
                    </span>
                </div>
                
                <div className='displaybar'>
                    <span className='expense'>
                    <h2>Expense</h2>
                    <div className='expense-text'>${expense}</div>
                    </span>
                </div>
                </div>
            </>
    
    )
}

export default Expense;