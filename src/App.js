import TransactionPage  from './Components/TransactionPage'; 
import './App.css';
import { useState, useEffect } from 'react';
import TransactionItem from './Components/TransactionItems/transaction';


function App() {
  const[clicked, setClicked] = useState(false)
  const [transactions, setTransaction] = useState([])

  const onClickTransactionBtn = () => { 
    setClicked(true)
  }

  const getAPi = async () =>{
    const url = "https://artists-assignment-backend-theta.vercel.app/getTransactions"
     const response = await fetch(url)
     const data = await response.json()
     setTransaction(data)
     console.log(data)
     

  }
  
  useEffect(() => {
    if (!clicked){
        getAPi()
    }
  },[clicked])



  return (
    <>
    {clicked ? <TransactionPage  setClicked = {setClicked} />: <div className="App">
      <header className ="header">
        <h1>Transactions Manager</h1>
        <button type = "button" className = "add-btn" onClick={onClickTransactionBtn} >+ Add Transaction</button>
      </header>
      <div>

            <div className= "table-header">
              <h4>Transaction Date</h4>
              <h4>Description</h4>
              <h4>Transaction Type</h4>
              <h4>Transaction Amount</h4>
              <h4>Account Balance</h4>
            </div>      
      </div>
      <div>
        {transactions.map((each) =>(
          <TransactionItem details = {each} key = {each.id}  />
        ) )}
      </div>
 
    </div>}
   
    
        
    </>
  );
}

export default App;
