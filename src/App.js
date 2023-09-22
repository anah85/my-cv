import './App.css';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Porfolio from './components/Porfolio/Porfolio';
import Tecno from './components/Tecno/Tecno';
import { DATOS } from './datos/datos';

const {hero, curriculum, portfolio, tecnoligia, footer} = DATOS;

function App() {
  return (
    <div className="App">
<Hero hero={hero}></Hero>
<Curriculum curriculum={curriculum}/> 
<Porfolio portfolio={portfolio}/>
<Tecno tecnoligia={tecnoligia}></Tecno>
<Footer footer={footer}/>

    </div>
  );
}

export default App;
