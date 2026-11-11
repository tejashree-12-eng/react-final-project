import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div>
        <h1>Paradise Nursery</h1>
        <p>Bring Nature Home</p>
        <button onClick={() => window.location.href = "#plants"}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
