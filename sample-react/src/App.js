import './App.css';
import { STATUS, getMyName } from 'utility';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {STATUS} <code>{getMyName()}</code>.
        </p>
      </header>
    </div>
  );
}

export default App;