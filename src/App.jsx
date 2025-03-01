import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
        {/* <Home /> */}
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
