import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Inicio" className="App-header"/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
