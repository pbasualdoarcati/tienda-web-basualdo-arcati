import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Views

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './Views/Category';



function App() {
  return (
    <div className="App">
      <Router>
      
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer />  }/>
          <Route path='/item/:id' element={ <ItemDetailContainer />  }/>
          <Route path="category/:category" element={ <Category /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
