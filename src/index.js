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

const rootElement = document.getElementById("root");
render(

  <BrowserRouter>
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-green-500 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/periodo" element={<Period />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>,
  rootElement

);
