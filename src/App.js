import { Routes, Route } from "react-router-dom";
import { MainView } from "./views/MainView"
import { ListView } from "./views/ListView"
import { CardView } from "./views/CardView"

export const App = () => {
    return ( 
        <div className = "App">
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="listview" element={<ListView />} />
                <Route path="cardview" element={<CardView />} />
            </Routes>
        </div>
    );
}