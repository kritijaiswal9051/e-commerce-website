import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await res.json();
        setProductData(productData);
        console.log("kj");
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    }
    fetchProductData();
  }, [id]);

  if (!productData) {
    return <div className="text-center">Loading</div>;
  }

  return (
    <>
      <h2 className="pt-20 font-bold text-lg ml-5">ProductDetails</h2>
      <div className="pt-5  w-[600px] h-[600px] text-center m-auto  ">
        <h1 className="text-2xl font-bold mb-4 text-center border-b-4 border">
          {productData.title}
        </h1>
        <img
          src={productData.thumbnail}
          alt={productData.title}
          className="w-[300px] h-[300px] object-cover mb-4 m-auto"
        />
        <p className="text-sm">{productData.description}</p>
        <p className="mt-4 font-bold ">Price: ${productData.price}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600 transition"
          onClick={() => addToCart(productData)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
