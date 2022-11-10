import './App.css';
import logo from './rubichvit.png';
import Button from './components/Button.component.js';
import Footer from './components/footer.component';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <a href="https://www.rubic.no/"><img src={logo} className="logo" /> </a>
        <h2 className='topTekst'> Vinlotteri for Rubic AS </h2>
      </div>
     
      <Button />
      <Footer />
    </div>
  );
}

export default App;
