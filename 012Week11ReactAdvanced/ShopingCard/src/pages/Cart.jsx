import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center items-start px-4 py-10 min-h-screen">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-10">
          <div className="flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="lg:w-1/3 p-6 border rounded-md shadow-md sticky top-5 h-fit">
            <div className="mb-6">
              <div className="font-semibold uppercase text-sm text-green-700">Your Cart</div>
              <div className="text-4xl uppercase -mt-1 text-green-700 font-bold">Summary</div>
              <p className="text-lg mt-3">
                <span className="font-semibold text-gray-700">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="text-lg text-gray-700 font-semibold">
              <p className="mb-1">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded hover:bg-green-700 transition duration-300">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-gray-500 font-bold text-2xl">Cart Empty</h1>
            <Link to={"/"}>
              <button className="border border-gray-300 py-2 px-6 text-[14px] rounded-md text-white font-semibold mt-4 bg-green-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


