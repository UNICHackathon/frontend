import React, { useState, useEffect } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TransactionItem from './TransactionItem';
import transactionsMock from 'mockData/Transactions';

const MiniTransactionList = () => {
    const [transactionsList, setTransactionsList] = useState(transactionsMock)

    useEffect(() => {
        console.log(transactionsList);
    }, [transactionsList])  // Added dependency array
    
    return (
        <Box>
            <Box>
                {[...transactionsList]  // Create a shallow copy
                    .reverse()  // Reverse the copy
                    .slice(0, 5)  // Take the first 5 elements
                    .map((transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            description={transaction.description || "Credit"}
                            isDebit={transaction.dcInd ? true : false}
                            amount={transaction.transactionAmount.amount}
                            currency={transaction.transactionAmount.currency}
                            listType={"mini"}  // Changed to "mini" as it's a MiniTransactionList
                        />
                    ))
                }
            </Box>
        </Box>
    );
}

export default MiniTransactionList