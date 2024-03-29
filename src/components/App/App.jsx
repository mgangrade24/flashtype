import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Nav Section */}
        <Nav />
        {/* Landing Page */}
        <Landing />
        {/* Challenge Section */}
        <ChallengeSection />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
