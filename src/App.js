import React,{useEffect, useCallback} from "react";
import Header from "./Componets/Home/header";
import CandyCrush from "./Componets/CandyCrush.js/CandyCrush";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FlappyyBird from "./Componets/FlappyBird/FlappyBirs";
import Main from "./Componets/Tic_and_toe/main";
import Slider from "./Componets/Home/slider";
import KeyBoard from "./Componets/KeyboardTeser/KeyBoard";
import Pinao from "./Componets/Piano/Pinao";
import Layout from "./Componets/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Slider />} />
        <Route path="CandyCursh" element={<CandyCrush />} />
        <Route path="bird_flap" element={<FlappyyBird />} />
        <Route path="Box" element={<Main />} />
        <Route path="Key" element={<KeyBoard />} />
        <Route path="Piano" element={<Pinao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
