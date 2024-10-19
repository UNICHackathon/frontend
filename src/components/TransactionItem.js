import React, {useState, useEffect } from 'react';
import { Box } from "@mui/material";
import {Typography} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// {description, amount, isDebit, currency, listType}
const TransactionItem = (props) => {
    const [isCredit, setIsCredit] = useState(false)
    const [listType, setListType] = useState("full")
    console.log(props)

    useEffect(() => {
        if(props.isDebit === false){
            setIsCredit(true)
        }

        setListType(props.listType)

    }, [isCredit])

  return (
    <Box style={{
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between",
        padding: "5px",
    }}>
        <Box style={{
            display:"flex",
            gap:"5px"
        }}>
            {isCredit ? <ArrowUpwardIcon /> : <ArrowDownwardIcon /> }
            <Typography>{props.description}</Typography>
        </Box>
        <Box >
            <Typography>{props.currency}{props.amount}</Typography>
            
        </Box>
    </Box>
  )
}

export default TransactionItem
