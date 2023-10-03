import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './Pages/MainPage';
import NotFoundPage from './Pages/NotFoundPage';
import CategoriesPage from './Pages/CategoriesPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProductModal from './Pages/ProductModalPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/productdetails/:id' element={<ProductDetailsPage/>}/>
        <Route path="/allProducts" element={<ProductModal pageTitle="All Products"/>} />
        <Route path="/allSales" element={<ProductModal pageTitle="Products with sale"/>} />
        <Route path="/category/:categoryId" element={<ProductModal pageTitle="Category Name" />} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>

      

  );
}

export default App;
