import "bootstrap/dist/css/bootstrap.min.css"
import {Outlet} from "react-router-dom";
import "./App.css"
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/Auth_Page/Auth";

import Dashboard from './components/DashBoard/Dashboard'

function App() {
  return( 
  <Router element={<Outlet/>}>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Auth/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;