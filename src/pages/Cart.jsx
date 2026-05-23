import Style from "./Cart.module.css"

function Cart({ cart, removeFromCart }) {
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
        </div>
    )
}

export default Cart