import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/index.css"

import { App } from "./App"
import { ListView } from "./views/ListView"
import { CardView } from "./views/CardView"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="listview" element={<ListView/>} />
        <Route path="cardview" element={<CardView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
