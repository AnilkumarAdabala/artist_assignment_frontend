import "./transaction.css"
const TransactionItem = (props) => {
    let{details} = props
    const{description, type, date, amount, balance} = details
    
    

    
    return(
        <div className="table-body">
            <div className="table-body-item">
                {date.split(" ")[0]}
            </div>
           
            <div  className="table-body-item"> 
                {description}
            </div>
             <div  className="table-body-item">
                {type}
            </div>
            <div className="table-body-item">
                {amount}
            </div>
            <div className="table-body-item">
                {balance}
            </div>
        </div>
    )
}

export default TransactionItem