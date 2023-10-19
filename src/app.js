import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, Login, Booktable } from './Pages';
import './app.css';

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/Booktable" element={<Booktable/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;