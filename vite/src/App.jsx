import { Route  , Routes } from 'react-router-dom';


//User
import Contact from './pages/user/Contact';
import Login from './pages/user/Login';
import Movie from './pages/user/Movie';
import Movies from './pages/user/Movies';
import ErrorPage from './pages/ErrorPage';



//Admin part
import Users from "./pages/admin/Users";
import Dashboard from './pages/admin/Dashboard';

//User layout
import UserLayout from './layouts/UserLayout';
//ADmin layout

//PrivateRoute
import PrivateRoute from "./components/PrivateRoute";




const App = () => {
  return (
    <>
    <Routes>
      
      {/* User Normal Routes */}
      <Route path='/' element={<UserLayout />}>
        <Route path='contact' element={<Contact />}/>
        <Route path='login' element={<Login />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='movie/:id' element={<Movie />}/>
      </Route>

        {/* Admin Routes */}
        <Route path='/admin'>

        <Route path=''
         element={<PrivateRoute  component ={<Dashboard />}/>}
        />

        <Route path='users' element={ 
          <PrivateRoute  component ={<Users />} sysRoles={["admin"]} />
        }
        />

        </Route>
         
    

      {/* Error Handling */}
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
     
    </>
  )
}

export default App;

