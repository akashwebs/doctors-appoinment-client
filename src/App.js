import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';

const publicRoute = [
  { path: '/', name: 'Home', Component: 'Home' },
  { path: '/home', name: 'Home', Component: 'Home' },
  { path: '/About', name: 'About', Component: 'About' },
  { path: '/login', name: 'Login', Component: 'Login' },
  { path: '/signup', name: 'SignUp', Component: 'SignUp' },
]


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index  element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>

        </Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
