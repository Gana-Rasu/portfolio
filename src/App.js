import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/>
    </div>
  );
}

export default App;
