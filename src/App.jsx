import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Courses from "./Courses/Courses.jsx";
import SignUp from "./components/SignUp.jsx";

function App(){
  return(
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/course"} element={<Courses/>}/>
        <Route path={"/signup"} element={<SignUp/>}/>
      </Routes>
    </div>
  )
}


export default App;