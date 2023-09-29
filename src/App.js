import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';
import NotFoundPage from './Pages/NotFoundPage';
import CategoriesPage from './Pages/CategoriesPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>

        
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>

      

  );
}

export default App;
