import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
