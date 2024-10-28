import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, About, Contact, Login } from "./components";
import toast, { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/login" element={<Login />}>
            Contact
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
