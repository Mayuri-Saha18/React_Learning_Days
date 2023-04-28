// import React from 'react';

// const CartComponent = ({ cartProducts }) => {
//   return <h2 data-testid="empty-text">The cart is empty!</h2>;

//   return (
//     <div data-testid="cart-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Sno</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Units</th>
//           </tr>
//         </thead>
//         <tbody data-testid="cart-body">
//           {/* map thorugh tht cart items and display in rows */}
//           <tr>
//             <td>{}</td>
//             <td>{}</td>
//             <td>Total</td>
//             <td data-testid="total-price"></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default CartComponent;

import React from 'react';

const CartComponent = ({ cartProducts }) => {
  if (cartProducts.length === 0) {
    return <h2 data-testid="empty-text">The cart is empty!</h2>;
  }

  const totalPrice = cartProducts.reduce((acc, cur) => acc + cur.price * cur.units, 0);

  return (
    <div data-testid="cart-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody data-testid="cart-body">
          {cartProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.units}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"></td>
            <td>Total</td>
            <td data-testid="total-price">{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartComponent;
