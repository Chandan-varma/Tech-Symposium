import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"; 
import Contact from "./components/Contact";
import Register from "./components/Register"; 
import EventRegister from "./components/EventRegister";
import StarCanvas from "./components/StarCanvas";

const App = () => {
  const [currentComponentId, setCurrentComponentId] = useState("1"); // Default to Home

  // Function to render the correct component based on the current component ID
  const renderComponent = (id) => {
    switch (id) {
      case "1":
        return <Home handleRegisterClick={() => setCurrentComponentId("5")} />; // Pass function to Home
      case "2":
        return <About />;
      case "3":
        return <Contact />;
      case "4":
        return <EventRegister />;
      case "5":
        return <Register />; // Render Register component when ID is "5"
      default:
        return <Home />; // Fallback to Home
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header setCurrentComponentId={setCurrentComponentId} /> {/* Pass state setter to Header */}
        {renderComponent(currentComponentId)} {/* Render component based on ID */}
        <StarCanvas />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
