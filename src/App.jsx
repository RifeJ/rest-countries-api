import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:id" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
