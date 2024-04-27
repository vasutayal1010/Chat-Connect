import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Login = lazy(()=> import("./pages/Login"))
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Chat = lazy(() => import("./pages/Chat"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat/:chatid" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
