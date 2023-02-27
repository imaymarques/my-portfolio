import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./styles/components/App.css";

function App() {
  return (
    <div className="portifolio">
      <h1>Mayara Marques</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
