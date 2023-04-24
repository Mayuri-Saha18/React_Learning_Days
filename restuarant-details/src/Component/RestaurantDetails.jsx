export const RestaurantCard = ({name,cuisine,price,delivery,payments,stars}) => {
    return (
        <div style={{display: "flex", alignItems: "center", border: "2px dashed red", margin: "20px"}}>
            
            <img src="https://png.pngtree.com/png-vector/20191107/ourlarge/pngtree-food-icon-design-vector-png-image_1966513.jpg" style={{height: "300px"}} alt="food"/>
            <div style={{textAlign: "left"}}>
            <p style={{margin: "7px", padding: "0px", fontSize: "20px", fontWeight: "bold"}}>Restaurant Name: {name}</p>
            <p style={{margin: "7px", padding: "0px", fontSize: "18px"}}>Cuisines: {cuisine.join(", ")}</p>
            <p style={{margin: "7px", padding: "0px", fontSize: "18px"}}>Price for two: ₹ {price}</p>
            <p style={{margin: "7px", padding: "0px", fontSize: "18px"}}>Delivery Time: {delivery} mins</p>
            <p style={{margin: "7px", padding: "0px", fontSize: "18px"}}>Payment mode: {payments}</p>
            <p style={{margin: "7px", padding: "0px", fontSize: "18px"}}>Ratings: ★ {stars}</p>
            </div>
        </div>
    )
}