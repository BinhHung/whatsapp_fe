import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { logout } from "./features/userSlice";

//Pages 
import Home from "./pages/home";  
import Login from "./pages/login";  
import Register from "./pages/register";  


function App() {
  const {user} = useSelector((state) =>({...state}));
  console.log(user);
  return (
    <div className="dark">
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
