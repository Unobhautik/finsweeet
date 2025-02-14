import Hero from "./components/Layout/hero";
import AboutUs from "./components/aboutus";
import Features from "./components/Featuresp";
import Pricing from "./components/pricingmain";
import Blogp from "./components/Blogp";
import Contactsp from "./components/contactsp";
import MainLayout from "./components/Layout/layout";
import NotFoundLayout from "./components/Layout/notfoundlayout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetailP from "./pages/Homepage/Blogdetailp";
import Pagenotfound from "./components/Layout/pagenotfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Hero /></MainLayout>} />
          <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
          <Route path="/features" element={<MainLayout><Features /></MainLayout>} />
          <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><Blogp /></MainLayout>} />
          <Route path="/blog/:id" element={<MainLayout><BlogDetailP /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contactsp /></MainLayout>} />
          <Route path="*" element={<NotFoundLayout><Pagenotfound /></NotFoundLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;