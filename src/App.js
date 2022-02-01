import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components';
import { Home, Period } from './pages';
function App() {
  return (
    <Router>
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/periodos" component={Period} />
            </Routes>
          </div>
          <Footer />
        </Router>
  );
}

export default App;
