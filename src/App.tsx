import { useEffect } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Sell from "./pages/Sell";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  const baseUrl =
    process.env.NODE_ENV === "production" ? "/delivery-app-deloitte/" : "/";

  return (
    <Router basename={baseUrl}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  );
};
