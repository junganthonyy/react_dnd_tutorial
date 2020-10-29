import Board from './components/Board';

function App() {
  return (
    <div className="App"
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <Board knightPosition={[0, 3]}/>
    </div>
  );
}

export default App;
