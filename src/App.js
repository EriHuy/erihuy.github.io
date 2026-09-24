import './App.css';
import Navbar from './components/navbar';
import About from './components/about'
import Hero from './components/hero'
import Projects from './components/projects';
import Footer from './components/footer'

import NeuralBackground from "./components/neural_background";
import BatCursor from "./components/batCursor";
import { useState } from 'react';

function App() {
  const [batCursorEnabled, setBatCursorEnabled] = useState(true);

  return (
    <div className="App">
      {/*<BatCursor />*/}
      <NeuralBackground />
      <header className="App-header">
        <BatCursor enabled={batCursorEnabled} />
        <section className="hero_wrapper">
          <Navbar
            batCursorEnabled={batCursorEnabled}
            setBatCursorEnabled={setBatCursorEnabled}
          />
          <Hero/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section  id="projects">
          <Projects/>
        </section>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
