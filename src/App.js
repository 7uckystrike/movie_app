import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import SingIn from "./routes/SingIn";
import Navbar from "./components/Navbar";

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Detail/>}></Route>
          <Route path="/SingIn" element={<SingIn/>}></Route>
        </Routes>
      </>
    </Router>

  )
}

export default App;


