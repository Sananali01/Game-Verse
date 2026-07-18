import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Games from './pages/Games'
import GameDetails from './pages/GameDetails'
import Accessories from './pages/Accessories'
import Consoles from './pages/Consoles'
import GamingPCs from './pages/GamingPCs'
import Components from './pages/Components'
import CategoriesIndex from './pages/CategoriesIndex'
import CategoryDetails from './pages/CategoryDetails'
import Brands from './pages/Brands'
import Deals from './pages/Deals'
import Wishlist from './pages/Wishlist'
import Compare from './pages/Compare'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import OrderSuccess from './pages/OrderSuccess'
import OrderTracking from './pages/OrderTracking'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/games" element={<Games />} />
        <Route path="/games/:slug" element={<GameDetails />} />

        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/:slug" element={<ProductDetails type="accessories" />} />

        <Route path="/consoles" element={<Consoles />} />
        <Route path="/consoles/:slug" element={<ProductDetails type="consoles" />} />

        <Route path="/gaming-pcs" element={<GamingPCs />} />
        <Route path="/gaming-pcs/:slug" element={<ProductDetails type="gaming-pcs" />} />

        <Route path="/components" element={<Components />} />
        <Route path="/components/:slug" element={<ProductDetails type="components" />} />

        <Route path="/categories" element={<CategoriesIndex />} />
        <Route path="/categories/:genre" element={<CategoryDetails />} />

        <Route path="/brands" element={<Brands />} />
        <Route path="/deals" element={<Deals />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-tracking" element={<OrderTracking />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
