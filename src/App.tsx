import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  // Set document title
  useEffect(() => {
    document.title = 'Amajala Uma Sai Sree Lakshmi | Portfolio';
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;