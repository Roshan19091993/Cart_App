

const FruitCart=({fruit,onAddToCart})=>{

    return(
        <div className="fruit-cart">
           <img  src={fruit.image}  alt={fruit.name}/>
           <h2>{fruit.name}</h2>
           <p>{fruit.benefits}</p>
           <button onClick={()=>onAddToCart(fruit)}>AddToCart</button>
        </div>
    )

}
export default FruitCart;