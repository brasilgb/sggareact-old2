import { render } from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  Home,
  Period
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
          <Route path="/" element={<Home />} />
          <Route path="/periodos" element={<Period />} />
          <Route path="/lotes" element={<Lotes />} />
          <Route path="/lotesadd" element={<LotesAdd />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>,
  rootElement

);
