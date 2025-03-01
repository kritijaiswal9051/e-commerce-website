import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartItem() {
  const { cart, removeCartItem } = useContext(CartContext);
  return (
    <div className="pt-20">
      <h2 className="text-center text-xl font-bold">Cart Item</h2>
      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty !</p>
      ) : (
        <div className="p-4 grid grid-cols-3 gap-4">
          {cart.map((item, i) => (
            <div key={i} className="border p-4 rounded-lg text-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-[50px] h-[100px] object-cover m-auto"
              />
              <p className="text-sm mt-2">{item.title}</p>
              <p className="font-bold">${item.price}</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600 transition"
                onClick={() => removeCartItem(item.id)}
              >
                Remove item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartItem;
