import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/Navbar";


import Home from "./pages/Home";

import Prediction from "./pages/Prediction";



function App() {


return (

<BrowserRouter>


<Navbar />


<Routes>


<Route

path="/"

element={<Home />}

/>



<Route

path="/prediction"

element={<Prediction />}

/>



</Routes>


</BrowserRouter>


);


}


export default App;