import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainView = lazy(() => import("./views/MainView.js"));
const ListView = lazy(() => import("./views/GridView.js"));
const GridView = lazy(() => import("./views/ListView.js"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="*" element={<MainView />} />
        <Route path="listview" element={<ListView />} />
        <Route path="gridview" element={<GridView />} />
      </Routes>
    </Suspense>
  );
};

export default App;
