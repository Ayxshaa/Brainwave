import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Button from './components/Button';
import Collab from './components/Collab';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Price from './components/Price';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
return (
<>


<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
    <Header />
    <Hero />
    <Benefits />
    <Collab />
    <Services />
    <Price />
    <Roadmap />
    <Footer />
     </div>
    <ButtonGradient />
    </>
   );
};

export default App
