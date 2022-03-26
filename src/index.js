import { render } from "react-dom";
import './index.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  Home,
  Ciclo
} from './pages';
import {
  NavBar,
  Footer
} from './components';
import Lotes from "./pages/Lotes";
import LotesAdd from "./pages/Lotes/LotesAdd";
import SideBar from "./components/Sidebar";

const rootElement = document.getElementById("root");
render(

  <BrowserRouter>
    <div className="flex flex-row min-h-screen bg-white text-gray-800">
      <SideBar />
      <div className="flex flex-col flex-grow -ml-52 md:ml-0 transition-all duration-150 ease-in">
        <NavBar />
        <div className="flex flex-col flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home loading={true} />} />
            <Route path="/ciclos" element={<Ciclo loading={true} />} />
            <Route path="/lotes" element={<Lotes loading={true} />} />
            <Route path="/lotesadd" element={<LotesAdd loading={true} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  </BrowserRouter>,
  rootElement

);
