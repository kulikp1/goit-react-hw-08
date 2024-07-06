import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { IoLogOutOutline } from 'react-icons/io5';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, <span className={css.username}>{user.name}</span></p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <IoLogOutOutline className={css.logOutIcon } />
      </button>
    </div>
  );
}