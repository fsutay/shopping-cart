import { Button, Card, CardImg } from "react-bootstrap"
import { Cart, Product } from "../interface/interface"
import { ProductRating } from "../utilities/rating"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, decreaseCartQuantity, removeFromCart } from "../store/cart-slice"

const StoreItem: React.FC<Product> = ({ id,
    title,
    description,
    price,
    discountPercentage,
    category,
    brand,
    rating,
    stock,
    images,
    thumbnail }) => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: { cart: Cart }) => state.cart);
    const cartItem = cartItems.find((item) => item.id === id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name: title, price, quantity, discountPercentage, thumbnail }));
    }
    const increaseCartQuantity = () => {
        dispatch(addToCart({ id, name: title, price, quantity: quantity + 1, discountPercentage, thumbnail }));
    }
    const _decreaseCartQuantity = () => {
        dispatch(decreaseCartQuantity(id))
    }
    const removeItem = () => {
        dispatch(removeFromCart(id))
    }
    return (
        <Card className="h-100 m-2">
            <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div
                    className="bg-danger rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "50px", height: "50px" }}
                >
                    <p className="text-white mb-0 small"> %{discountPercentage} </p>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <CardImg src={thumbnail}
                    variant="top"
                    alt="Laptop"
                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                />
            </div>

            <Card.Body>
                <div className="d-flex justify-content-between">
                    <p className="small">
                        <a href="#!" className="text-muted">
                            {category}
                        </a>
                    </p>
                    <p className="small text-danger">
                        <s>{discountPercentage ? price + "$" : ""}</s>
                    </p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{title}</h5>
                </div>
                <div>
                    <h5 className="text-dark mb-2">
                        {discountPercentage
                            ? (price - (price * discountPercentage) / 100).toFixed(2) + '$'
                            : price + '$'}
                    </h5>
                </div>
                <div className="mb-2">
                    <div className="ms-auto text-warning">
                        <p className="text-muted mb-0">
                            Available: <span className="fw-bold">{rating}</span>
                        </p>
                        <div>
                            <ProductRating productRating={rating} />
                        </div>

                    </div>
                    <div>
                        {
                            quantity === 0 ? (<Button className="w-100"
                                onClick={handleAddToCart}
                            >
                                + Add To Cart
                            </Button>) : (
                                <div
                                    className="d-flex align-items-center flex-column"
                                    style={{ gap: ".5rem" }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{ gap: ".5rem" }}
                                    >
                                        <Button onClick={_decreaseCartQuantity}>-</Button>
                                        <div>
                                            <span className="fs-3">{quantity}</span> in cart
                                        </div>
                                        <Button onClick={increaseCartQuantity}>+</Button>
                                    </div>
                                    <Button variant="danger" size="sm" onClick={removeItem}>Remove</Button>
                                </div>)
                        }


                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem