import { Button, Stack } from 'react-bootstrap';
import { CartItem } from '../interface/interface';
import { removeFromCart } from '../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItemComponent: React.FC<CartItem> = ({ id: _id, quantity: _quantity, thumbnail: _thumbnail, name, price, discountPercentage }) => {
  let newPrice: string | number = discountPercentage
    ? (price - (price * discountPercentage) / 100).toFixed(2)
    : price;
  newPrice = typeof newPrice === 'string' ? parseFloat(newPrice) : newPrice;

  const dispatch = useDispatch(); 

  const removeItem = () => {
    dispatch(removeFromCart(_id));
  };

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={_thumbnail}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {name}{' '}
          {_quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {_quantity}x
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {newPrice}$
        </div>
      </div>
      <div> {newPrice * _quantity}$</div>
      <Button variant="outline-danger" size="sm" onClick={removeItem}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItemComponent;
