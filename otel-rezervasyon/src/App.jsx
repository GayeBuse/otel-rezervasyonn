import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Home />
        <AboutUs />
        <BookingPage />
        <TeamPage />
        <TestimonialPage />
        <ContactPage />
        <PageNotFound />
        <RoomPage />
        <ServicePage />
      </div>
    </>
  );
}

export default App;
