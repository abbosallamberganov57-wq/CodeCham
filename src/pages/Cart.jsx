import Style from "./Cart.module.css"

function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce(
        (total, item) => total + item.price,
        0
    )
    return (
        <div className={Style.cart}>
            <div className="container">
                <h1 className={Style.title}>Корзина</h1>
                {cart.length === 0 ? (
                    <p className={Style.empty}>Ваша корзина пуста</p>
                ) : (
                    <div className={Style.cartItems}>
                        {cart.map((item, index) => (
                            <div key={index} className={Style.cartItem}>
                                <div className={Style.itemInfo}>
                                    <h3>{item.name}</h3>
                                    <p>Цена: ${item.price.toFixed(2)}</p>
                                </div>
                                <div className={Style.price}>
                                    ${item.price.toFixed(2)}
                                </div>
                                <button
                                    className={Style.removeBtn}
                                    onClick={() => removeFromCart(index)}
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <h2 className={Style.total}>
                Итого: {totalPrice.toFixed(2)}$
            </h2>
        </div>

    )
}

export default Cart