import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const cartList = useSelector(selectCartList);
  const dispatch = useDispatch();

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((cart, index) => (
            <tr key={cart.id}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <button type="button" onClick={() => {dispatch(decreaseCount(cart.id));}}>-</button>
                {cart.count}
                <button type="button" onClick={() => {dispatch(increaseCount(cart.id));}}>+</button>
              </td>
              <td>{(cart.count * cart.price).toLocaleString()} &#8361;</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;