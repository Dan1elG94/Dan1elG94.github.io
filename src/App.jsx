import {
  Contact,
  Events,
  Features,
  Hero,
  Navbar,
  MobileMenu,
  Footer,
} from './components';

const App = () => {
  return (
    <main>
      <Navbar />
      <MobileMenu />
      <Hero />
      <Events />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
