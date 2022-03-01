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
  Header,
  Footer
} from './components';
import Lotes from "./pages/Lotes";
import LotesAdd from "./pages/Lotes/LotesAdd";

const rootElement = document.getElementById("root");
render(

  <BrowserRouter>
  
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-gray-200 flex-grow">
        <Routes>
          <Route path="/" element={<Home loading={true} />} />
          <Route path="/ciclos" element={<Ciclo loading={true} />} />
          <Route path="/lotes" element={<Lotes loading={true} />} />
          <Route path="/lotesadd" element={<LotesAdd loading={true} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>,
  rootElement

);
