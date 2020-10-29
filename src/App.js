import Knight from './components/Knight';
import Square from './components/Square';
import './App.css';

function App() {
  return (
    <div className="App">
      <Square black>
        <Knight/>
      </Square>
    </div>
  );
}

export default App;
