import Contact from './pages/user/Contact';
import Login from './pages/user/Login';
import Movie from './pages/user/Movie';
import Movies from './pages/user/Movies';
import ErrorPage from './pages/ErrorPage';

import { Route  , Routes } from 'react-router-dom';

import Users from "./pages/admin/Users";
import UserLayout from './layouts/UserLayout';



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<UserLayout />}>
      {/* User Normal Routes */}
        <Route path='contact' element={<Contact />}/>
        <Route path='login' element={<Login />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='movie/:id' element={<Movie />}/>
      </Route>

        {/* Admin Routes */}
        <Route path='/admin'>
        <Route path='users' element={<Users />}/>
        </Route>
         
    

      {/* Error Handling */}
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
     
    </>
  )
}

export default App;

