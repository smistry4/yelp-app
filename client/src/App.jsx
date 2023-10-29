import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantContextProvider } from "./context/RestaurantsContext";

const App = () => {
    return (
        <RestaurantContextProvider>
            <div className="container">
                <Router>
                    <Routes>
                        <Route exact path="/" Component={Home} />
                        <Route exact path="/restaurants/:id/update" Component={UpdatePage} />
                        <Route exact path="/restaurants/:id" Component={RestaurantDetailPage} />
                    </Routes>
                </Router>
            </div>
        </RestaurantContextProvider>
    ) 
}

export default App;