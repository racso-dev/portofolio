import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bio from './components/Bio';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Bio />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
