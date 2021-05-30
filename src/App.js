import './App.css';
import Weather from "./Components/Weather.js";
import DelayedRoutes from "./Components/DelayedRoutes.js";
import Ramps from "./Components/Ramps.js";

function App() {

  return (
    <div className="Main">
      <Weather/>
      <DelayedRoutes/>
      <Ramps/>
    </div>
  );
}

export default App;
