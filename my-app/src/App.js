import TopBar from "./scenes/global/TopBar";
import { Routes, Route } from "react-router-dom";
// import DashBoard from "./scenes/dashBoard/";
import SideBar from "./scenes/global/SideBar";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import Users from "./components/Users";
// import pie from "./scenes/pie";
// import bar from "./scenes/bar";
// import line from "./scenes/line";
// import team from "./scenes/team";
// import invoices from "./scenes/invoices";
// import contacts from "./scenes/contacts";
// import form from "./scene/form";
// import faq from "./scenes/faq";
// import geography from "./scenes/geography";
// import calender from "./scenes/calender";

function App() {
  const showSideBar = useSelector((state) => state.showSideBar);
  const formOpen = useSelector((state) => state.formOpen);

  return (
    <div>
      <div className="app">
        {formOpen && 
          <Form />
          }
       {!formOpen&& <main className="content">
          <TopBar />
           <SideBar />
           {/* <Users /> */}

          {/* <div className="board">
          </div> */}
          {/* <Routes> */}
          {/* <Route path="/" element={<DashBoard />}></Route> */}
          {/* <Route path="/team" element={<team />}></Route>
            <Route path="/bar" element={<bar />}></Route>
            <Route path="/line" element={<line />}></Route>
            <Route path="/pie" element={<pie />}></Route>
            <Route path="/invoices" element={<invoices />}></Route>
            <Route path="/contacts" element={<contacts />}></Route>
            <Route path="/form" element={<form />}></Route>
            <Route path="/faq" element={<faq />}></Route>
            <Route path="/geography" element={<geography />}></Route>
            <Route path="/calender" element={<calender />}></Route> */}
          {/* </Routes> */}
        </main>}
      </div>
    </div>
  );
}

export default App;
