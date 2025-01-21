import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {/* <Home /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
