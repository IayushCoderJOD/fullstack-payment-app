import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import { useSelector } from 'react-redux';
import SendMoney from "./pages/SendMoney";
import store from "./components/Store";

function App() {
  const isLoggedIn = useSelector(store => store.user.isLoggedIn)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Signup />} />
          <Route path="/send" element={isLoggedIn ? <SendMoney /> : <Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;