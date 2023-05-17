import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <div className='wave layer'>
        <Resume />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
