import {useDispatch} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { logout } from "./features/userSlice";

//Pages 
import Home from "./pages/home";  
import Login from "./pages/login";  
import Register from "./pages/register";  


function App() {
  const dispatch = useDispatch();
  return (
    <div className="dark">
      <button 
      onClick={()=>{
        dispatch(logout());
      }}
      >logout</button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
