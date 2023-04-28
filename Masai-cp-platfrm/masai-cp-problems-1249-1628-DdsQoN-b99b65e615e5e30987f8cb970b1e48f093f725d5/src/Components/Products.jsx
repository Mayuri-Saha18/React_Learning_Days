// import React, { useState } from 'react';

// const Products = () => {
//   return (
//     <div>
//       <button data-testid="get-btn">Get Products</button>
//       <div className="dashboard">
//         <h1>Dashboard</h1>
//         <div>
//           <h1>Cart</h1>
//           {/* import cart component here */}
//         </div>
//         <div data-testid="products-container">{/* map thorugh products */}</div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartComponent from './CartComponent';
import styles from "./Products.module.css"

const Products = () => {
const [products,setProducts]=useState([])
const [showProducts,setShowProducts]=useState(true)
const getProducts=()=>{
fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
.then((res)=>res.json())
.then((res)=>{
setProducts(res);
console.log(res)
})
.catch((err)=>console.log(err))
}
const showProduct=()=>{
getProducts();
setShowProducts(false)
}
return (
<div>
{showProducts ? (
<button className={styles.button} onClick={showProduct} data-testid="get-btn">Get Products</button>
) : null}
<div className="dashboard" style={{ display: showProducts ? 'none' : 'block' }}>
<h1>Dashboard</h1>
<div>
<h1>Cart</h1>
<CartComponent /> 
</div>
<div className={styles.productscontainer} data-testid="products-container">
{products.map((el)=> (

<ProductCard key={el.id} {...el} />

))}
</div>
</div>
</div>
);
};

export default Products;