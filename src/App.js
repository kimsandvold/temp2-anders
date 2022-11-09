import './App.css';
import logo from './rubichvit.png';
import Button from './components/Button.component.js';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <a href="https://www.rubic.no/"><img src={logo} className="logo" /> </a>
        <h2 className='topTekst'> Vinlotteri for Rubic AS </h2>
      </div>
     
      <Button />
    </div>
  );
}

export default App;
