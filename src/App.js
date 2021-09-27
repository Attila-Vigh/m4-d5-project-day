import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import  Carousel  from  'react-elastic-carousel'
import Movies from './components/Movie'

function App() {
  return (
    <div className="App">
      <Navigation />
      <h4>Trending Now</h4>
      <Carousel>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
      </Carousel>
      <h4>Watch It Again</h4>
      <Carousel>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
      </Carousel>
      <h4>New Releases</h4>
      <Carousel>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
        <Movies movieData="Spider man"/>
      </Carousel>
      <Footer/>

    </div>
  );
}

export default App;
