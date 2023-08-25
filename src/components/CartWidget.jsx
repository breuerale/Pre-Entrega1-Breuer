import carrito from "../assets/carrito.png"

const CartWidget = () => {
    return (
        <div className="divCarrito">
            <a href="#">
                <img src={carrito} class="carrito"></img>
            </a>
        </div>
    )
}

export default CartWidget