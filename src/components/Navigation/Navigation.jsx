import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FaHome } from 'react-icons/fa';
import { RiContactsBook3Fill } from 'react-icons/ri';

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/" className={css.home}>
        <FaHome className={css.icon} />
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className={makeNavLinkClass}>
            Contacts
          </NavLink>
          <NavLink to="/contacts" className={css.contacts}>
            <RiContactsBook3Fill className={css.icon} />
          </NavLink>
        </>
      )}
    </nav>
  );
}