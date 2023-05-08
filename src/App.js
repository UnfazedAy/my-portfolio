import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Project /> 
    </div>
  );
}

export default App;
