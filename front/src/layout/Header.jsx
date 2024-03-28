import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const authNav = [
  { to: '/', text: <b>Login</b> },
  { to: '/register', text: <b>SignUp</b> },
];

const userNav = [
  { to: '/', text: 'Room' },
  { to: '/reserve', text: 'Reserve' },
  // { to: '/payment', text: 'Payment' },
  // { to: '/review', text: 'Review' },
  { to: '/record', text: 'Record' },
  { to: '/contact', text: 'Contact' },
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : authNav;

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar bg-zinc-400 mt-100" style={{ justifyContent: 'flex-start' }}>
      <div className="navbar bg-base-600 flex items-center">
        <div>
          <img
            src="https://i.pinimg.com/564x/0a/1e/e4/0a1ee42faa83a14b37a51d4d9b137bbd.jpg"
            alt="User Avatar"
            className="w-16 h-16 rounded-full ml-4"
          />
        </div>
        <h1 className='btn btn-ghost text-sm'>Booking.com</h1>
      </div>
      <div className="navbar-links flex items-center ml-4"> {/* Adjusted margin here */}
        {finalNav.map((el, index) => (
          <div key={el.to} className="mr-4"> {/* Added margin to separate links */}
            <Link to={el.to} className="btn btn-ghost text-sm">
              {el.text}
            </Link>
          </div>
        ))}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {user?.id && (
          <div className="btn btn-ghost text-sm">
            <Link to="#" onClick={hdlLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
