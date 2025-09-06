

const Cart=({cartItems})=>{
  
    return(
        <div>
        <h2>Your Cart</h2>
        {
            cartItems.length > 0 ?(
                <li>No Item in list</li>
            ):(
            <ul>
                {
                    cartItems.map((item,index)=>
                    <li key={index}>{item}</li>
                    )
                }
            </ul>
            )
        }
        </div>
    )
}
export default Cart