import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <div className="App container">
        <Routes>
            <Route exact path='/'  element={<HomePage/>}/>
            <Route exact path='/login'  element={<LoginPage/>}/>
            <Route exact path='/register'  element={<RegisterPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
