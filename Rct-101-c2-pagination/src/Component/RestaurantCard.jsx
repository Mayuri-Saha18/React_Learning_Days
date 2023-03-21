import styles from "./RestaurantCard.css"
function RestaurantCard({name,type,image,rating,number_of_votes,price_starts_from }) {

  return (
  <div data-testid="restaurant-card" className={styles.container}>

   {/* display the props */}
   <div>
<img data-testid="restaurant-card-image"
 src={image}/>
 </div>
 <div>
    Name:<b data-testid="restaurant-card-name"
>{name}</b>
</div>
<div>
Type:<b data-testid="restaurant-card-type"
>{type}</b>
</div>
<div>
Price:<b data-testid = "restaurant-card-price"
>{price_starts_from}</b>
</div>
<div>
Rating:<b data-testid="restaurant-card-rating"
>{rating}</b>
</div>
<div>
Votes:<b data-testid = "restaurant-card-votes"
>{number_of_votes}</b>
   </div>
    </div>
  );
}

export default RestaurantCard;
