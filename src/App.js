import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contacts />
    </div>
  );
}

export default App;
