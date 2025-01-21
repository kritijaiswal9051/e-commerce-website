import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

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
              onClick={() => {
                navigate(`product/${item.id}`);
              }}
              key={index}
              className="flex flex-col rounded-lg border-[3px] items-center mb-2"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-[150px] h-[200px] object-cover"
              />
              <p className="text-sm text-center my-2">{item.title}</p>
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
