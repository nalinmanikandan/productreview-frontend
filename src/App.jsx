import './App.css'
import ListProductComponent from './components/ListProductComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductComponent from './components/ProductComponent.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element = { <ListProductComponent /> }></Route>
          {/* // http://localhost:3000/products */}
          <Route path='/products' element = { <ListProductComponent /> }></Route>
          {/* http://localhost:3000/add-product */}
          <Route path="/add-product" element={<ProductComponent />} />
          {/* http://localhost:3000/edit-product/1 */}
          <Route path="/edit-product/:id" element={<ProductComponent />} />
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
