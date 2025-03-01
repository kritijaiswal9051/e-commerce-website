import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

function Home() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const ProductData = await res.json();
        setProductData(ProductData.products);
        console.log(ProductData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProductData();
  }, []);

  return (
    <>
      <h1 className="text-[20px] font-bold text-center pt-20 ">Products</h1>
      <div className="p-4 grid grid-cols-4 gap-4">
        {productData && productData.length ? (
          productData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border-[3px] items-center mb-2"
            >
              <img
                onClick={() => {
                  navigate(`product/${item.id}`);
                }}
                src={item.thumbnail}
                alt={item.title}
                className="w-[150px] h-[200px] object-cover"
              />
              <p className="text-sm text-center my-2">{item.title}</p>
              <button
                className="px-4 py-1 bg-blue-500 text-white rounded m-4 hover:bg-blue-600 transition"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <div className="text-center ">Loading...</div>
        )}
      </div>
    </>
  );
}

export default Home;
