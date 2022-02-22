import logo from './logo.svg';
import './App.css';
import Memcanvas from './components/memcanvas/Memcanvas';
import Top from './components/header/Top';
import Placeholder from './components/placeholder/Placeholder';

function App() {
  return (
    <div className="App">
      <Top/>
      <Placeholder/>
      <Memcanvas/>
    </div>
  );
}

export default App;
