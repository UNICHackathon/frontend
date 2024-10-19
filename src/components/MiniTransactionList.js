import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import transactions from 'mockData/Transactions';

const MiniTransactionList = () => {
    const [miniTransList, setMiniTransList] = useState([]);

    useEffect(() => {
        setMiniTransList(miniTransList.reverse().splice(5))
    }, [miniTransList])
    
  return (
    <Box>
        
    </Box>
  )
}

export default MiniTransactionList
