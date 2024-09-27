import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter import edilmeli
import {
  Home,
  BookingPage,
  AboutUs,
  ContactPage,
  PageNotFound,
  RoomPage,
  ServicePage,
  TeamPage,
  TestimonialPage,
} from "./pages/index";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        {/* Routes bileşeni ile rotalar tanımlanır */}
        <Routes>
          {/* Anasayfa için rota */}
          <Route path="/" element={<Home />} />

          {/* Diğer sayfalar için rotalar */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/service" element={<ServicePage />} />

          {/* 404 sayfası */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
