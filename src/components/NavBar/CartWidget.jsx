import { ImCart } from "react-icons/im";

const CartWidget = () => {
    return (
      <div className="cartwidget">
        <ImCart size={30} className="cart"/>
        <p>0</p>
      </div>
    )
  }
  export default CartWidget