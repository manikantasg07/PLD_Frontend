import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sigin from './auth/Signin';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Sigin />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
