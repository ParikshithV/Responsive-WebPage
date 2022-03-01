import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/HeaderDiv/Header';
import SecondDiv from './components/SecondDiv/SecondDiv';
import ThirdDiv from './components/ThirdDiv/ThirdDiv';
import FourthDiv from './components/FourthDiv/FourthDiv';
import TabSectionDiv from './components/TabSectionDiv/TabSectionDiv';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <SecondDiv/>
      <ThirdDiv/>
      <FourthDiv/>
      <TabSectionDiv/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
