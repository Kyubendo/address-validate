import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter} from "react-router-dom";
import Address from "./Address";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
            </div>
            <div>
                <Address></Address>
            </div>
        </BrowserRouter>

    );
}

export default App;
