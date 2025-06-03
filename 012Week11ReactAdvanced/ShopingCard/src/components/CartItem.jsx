// Updated CartItem.jsx
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed from cart");
  };

  return (
    <div className="flex items-start justify-between p-4 border rounded-md mb-4 shadow-md w-full max-w-3xl mx-auto">
      <div className="flex w-full gap-5">
        <div className="w-28 h-28 flex-shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h1 className="text-xl font-semibold mb-1">{item.title}</h1>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-green-500 font-bold text-lg">${item.price}</p>
            <div
              className="text-red-500 cursor-pointer p-2 rounded-full hover:bg-red-200 transition duration-300"
              onClick={removeFromCart}
            >
              <FcDeleteDatabase size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
