import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InventoryItems from './components/InventoryItems/InventoryItems';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleDetailsitems from './components/SingleDetailsItem/SingleDetailsitems';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import ManageInventories from './components/ManageInventories/ManageInventories';
import NewItemAdd from './components/NewItemAdd/NewItemAdd';
import MyItems from './components/MyItems/MyItems';
import ContactUs from './components/ContactUs/ContactUs';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventoryItems" element={<InventoryItems />} />
        <Route path="/inventoryItems/:id" element={
          <RequireAuth>
              <SingleDetailsitems />
          </RequireAuth>
        } />
        <Route path="/addProduct" element={
          <RequireAuth>
              <NewItemAdd />
          </RequireAuth>
        } />
        <Route path="/myItems" element={
          <RequireAuth>
              <MyItems />
          </RequireAuth>
        } />
        <Route path="/manageInventories" element={<ManageInventories />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
