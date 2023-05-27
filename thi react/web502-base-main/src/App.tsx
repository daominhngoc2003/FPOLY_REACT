import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { AddProduct, getAllProduct, DeleteProduct, UpdateProduct } from './api/products'
import AdminLayout from './components/AdminLayout'
import Clientslayout from './components/Clientslayout'
import AddProducts from './pages/admin/ProductAdd'
import Dashboard from './pages/admin/Dashboard'
import ProductList from './pages/admin/ProductList'
import UpdateProducts from './pages/admin/ProductUpdate'
import HomePage from './pages/clients/HomePage'
import ProductDetail from './pages/clients/ProductDetail'
import ProductPage from './pages/clients/ProductPage'
import Signin from './pages/user/Signin'
import Signup from './pages/user/Signup'
import { IProduct } from './types/products'
import { ISignin, ISignup } from './types/user'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"
import { message } from 'antd'
import { signin, signup } from './api/user'

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllProduct();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  //---------- Xóa
  const onHanleRemove = (id: number) => {
    DeleteProduct(id).then(() => {
      const newpro = products.filter((pro) => pro.id !== id);
      setProducts(newpro);
    })
  }

  // -----------Thêm
  const onHanleAdd = (product: IProduct) => {
    AddProduct(product)
      .then(() => {
        setProducts([...products, product]);
        message: message.success('Thêm thành công');
        navigate("/admin/products");
      })
  }

  //------------Cập nhật
  const onHanleUpdate = (product: IProduct) => {
    UpdateProduct(product)
      .then(() => {
        setProducts(products.map((pro) => pro.id == product.id ? product : pro));
        message.success('Sua thành công');
        navigate("/admin/products");
      }).catch((error) => console.log(error))
  }

  // ===========================USER ========================================
  // -------------Đăng nhập
  const onHanldeSignin = async (user: ISignin) => {
    try {
      const { data } = await signin(user);
      localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }
      message.success("Đăng nhập succcesss")
    } catch (error) {
      console.log(error);
    }
  }
  const onHanldeSignup = async (user: ISignup) => {
    try {
      const { data } = await signup(user);
      navigate("/signin")
      message.success("Đăng ký succcesss")
    } catch (error) {
      console.log(error);
      message.warning("tài khoản hoặc mật khẩu đã tồn tại")
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Clientslayout />} >
          <Route path='products' >
            <Route index element={<ProductPage products={products} />} />
            <Route path=':id' element={<ProductDetail products={products} />} />
          </Route>
          <Route path='signup' element={<Signup onSignup={onHanldeSignup} />} />
          <Route path='signin' element={<Signin onSignin={onHanldeSignin} />} />
        </Route>

        <Route path='admin' element={<AdminLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductList products={products} onRemove={onHanleRemove} />} />
            <Route path='add' element={<AddProducts onAdd={onHanleAdd} />} />
            <Route path=':id/update' element={<UpdateProducts products={products} onUpdate={onHanleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App