import Counter from './Counter';
import './App.css';

function App() {
  const initialCount = 0
  return (
    <div className="App">
      <h1>Counter Application</h1>
      
      <Counter initialCount={initialCount}/ >
    </div>
  );
}

export default App;
