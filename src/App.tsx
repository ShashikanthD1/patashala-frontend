import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import {routes} from "./routes/AppRoutes"
import Location from './pages/location/Location';


const App = () => {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <div>
      <Location />
    </div>
    </Router>
    
  );
};

export default App;

