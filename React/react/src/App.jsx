import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
// import './App.css'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import AdminProduct from './pages/admin/AdminProduct'
import { AddProduct, getAllProduct, RemoveProduct, UpdateProduct } from './api/products'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import axios from 'axios'
import { Navigate, Outlet } from 'react-router-dom';
function App() {

  // Lấy dữ liệu để duyệt ra tất cả sản phẩm
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setproducts(data.products));
  }, [])

  // Xóa sản phẩm
  const onHandleRemove = (_id) => {
    console.log(_id);
    RemoveProduct(_id).then(() => {
      const newpro = products.filter((item) => item._id !== _id);
      setproducts(newpro);
    }).then(() => alert("Xóa thành công"));
  }

  // Thêm sản phẩm
  const onHandleAdd = (product) => {
    AddProduct(product);
    setproducts([...products, product]);
  }

  // Update sản phẩm
  const onHandleUpdate = (product) => {
    UpdateProduct(product).then(() => {
      setproducts(products.map(item => item._id == product._id ? product : item))
    }).then(() => alert("Cập nhật thành công"));
  }
  // console.log(products);
  const onHandleSignup = async (user) => {
    await axios.post(`http://localhost:8080/api/signup`, user);
    alert("Đăng nhập ký công")
  }
  const onHandleSignin = async (user) => {
    const { data } = await axios.post("http://localhost:8080/api/signin", user);
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken))
    alert("Đăng nhập nhập công")
  }

  //check quyen 
  const AdminWrapper = () => {
    const isAdmin = localStorage.getItem("accessToken")
    return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage products={products} />} />
          <Route path='products'>
            <Route index element={< ProductPage products={products} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>

          <Route path='signup' element={< Signup onSignup={onHandleSignup} />} />
          <Route path='signin' element={< Signin onSignin={onHandleSignin} />} />


          <Route path="admin" element={<AdminWrapper />}>
            <Route index element={< Dashboard />} />
            <Route path='products' >
              <Route index element={<AdminProduct products={products} onRemove={onHandleRemove} />} />
              <Route path='add' element={<ProductAdd onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<ProductEdit products={products} onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
