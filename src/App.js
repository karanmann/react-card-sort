import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainView } from "./views/MainView";
import { ListView } from "./views/ListView";
import { GridView } from "./views/GridView";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainView />} />
      <Route path="listview" element={<ListView />} />
      <Route path="gridview" element={<GridView />} />
    </Routes>
  );
};
