import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App w-11/12 mx-auto">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
