
import { Outlet } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import UserFooter from './UserNavbar';


const UserLayout = () => {
  return (
    <div>
        <UserNavbar/>
        <Outlet />
        <UserFooter />

    </div>
  )
}

export default UserLayout