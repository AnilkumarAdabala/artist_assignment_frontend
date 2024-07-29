import { useState } from "react"
import "./index.css"
const TransactionPage = (props) =>{
    const {setClicked}  = props
    const[type, setType] = useState("Credit")
    const[amount, setAmount] = useState(0)
    const[description, setDescription] = useState("")
    

    const onClickSaveBtn = async (e) => {
        e.preventDefault();
        const url = "https://artists-assignment-backend-ouh3.vercel.app/addTransaction"
        const data = {
            description: description,
            type: type,
            amount: parseInt(amount),
        }
        console.log(data)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(data)
            })
        console.log(response)
        
        if (response.status === 200){
            setClicked(false)
        }
        
        
    }
    return(
      <div className="new-transaction-page">
        <div className="transaction-page">
        <h1 className="heading">New Transaction</h1>
        <form onSubmit={onClickSaveBtn}>
        <div className="transaction-type">
            <p>Transaction Type</p>
            <div>
            <select className="dropdown" onChange = { (e) => setType(e.target.value)} required>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
            </select>
            </div>
        </div>
        <div className="transaction-type" >
            <p>Amount</p>
            <input type = "number" className="dropdown" onChange = { (e) => setAmount(e.target.value)} required/>
        </div>
        <div className="transaction-type">
            <p>Description</p>
            <textarea  className="dropdown" onChange = { (e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="btn-container">
            <button type = "submit" className="btn save" >Save</button>
            <button type = "button" className="btn" onClick={() => {
                setClicked(false)
            }}>x Cancel</button>
        </div>
        </form>
      </div>
      </div>
    )

}

export default TransactionPage