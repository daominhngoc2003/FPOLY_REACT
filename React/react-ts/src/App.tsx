import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import { createProduct, deleteProduct, getAllProduct } from './api/products';
import axios from 'axios';
import AdminProduct from './pages/admin/AdminProduct';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import { IProduct } from './types/products';


function App(){
  const [products, setproducts] = useState<IProduct[]>([]);
  useEffect(()=>{
    getAllProduct().then(({data})=>setproducts(data.products));
  }, []);
  const onHandleRemove = (_id:number)=>{
    deleteProduct(_id).then(()=>{
      setproducts(products.filter(pro=> pro._id !== _id))
    })
  }
  const onHandleAdd = (product: IProduct)=>{
    createProduct(product);
  }

  return (
    <div className="App">
     <Routes>
      <Route path='/'>
        <Route index element={< HomePage />} />
        <Route path='products' >
          <Route index element={< ProductPage  />} />
          <Route path=':id' element={< ProductDetail />} />
          </Route>
        </Route>
        <Route path='admin' >
          <Route index element={< AdminProduct products={products} onRemove = {onHandleRemove} />} />
          <Route path='add' element={< AddProduct onAdd = {onHandleAdd}/>} />
          <Route path=':id/update' element={< UpdateProduct  />} />
          </Route>
     </Routes>
    </div>
  )
}


export default App
