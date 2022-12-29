import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Dashboard from './Dashboard';

// Create the Redux store using the configureStore function
const store = configureStore({
  reducer: {
    addComponent,
    updateComponents
  },
  preloadedState: initialState
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Dashboard/>
      </header>
    </div>
  );
}

export default App;
