import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import UpdataEmployeeComponent from "./components/UpdataEmployeeComponent";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/home" Component={Home}></Route>
            <Route exact path="/" Component={ListEmployeeComponent}></Route>
            <Route path="/employees" Component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" Component={AddEmployeeComponent}></Route>
            <Route path="/edit-employee/:id" Component={UpdataEmployeeComponent}></Route>
          </Routes>
          {/* <ListEmployeeComponent /> */}
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
