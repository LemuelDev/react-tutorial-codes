import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;