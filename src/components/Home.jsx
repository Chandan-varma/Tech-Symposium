import Benefits from "./Benefits";
import Hero from "./Hero";

const Home = ({ handleRegisterClick }) => { // Accept the function as a prop
  return (
    <>
      <Hero handleRegisterClick={handleRegisterClick} /> {/* Pass the function to Hero */}
      <Benefits />
    </>
  );
};

export default Home;
