import React, { useState } from 'react';
import { uniqueId } from '../utils';
import './TransactionForm.css'

function TransactionForm({ onNewTransaction }) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = (type, evt) => {
        evt.preventDefault();

        const data = { id: uniqueId(), name: nameValue, 
                amount: parseInt(amountValue), type: type };

        onNewTransaction(data);

        setNameValue('');
        setAmountValue('');
    }

    return (
        <>
        <div className='form'>
            <h2>Add New Transactions</h2>
            <div  className='transaction-form'>
            <form>

                <label className='label'>
                    Name
                    <div>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} className='input' size={50}/>
                    </div>
                </label>
                <label className='label'>
                    Amount
                    <div>
                        <input type="number" value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)} className='input' size={50}/>
                    </div>
                </label>
                <div className='buttons'>
                    <button className='income-btn' onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className='expense-btn' onClick={(e) => addTransaction('expense', e)} >Add Expense</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export default TransactionForm;