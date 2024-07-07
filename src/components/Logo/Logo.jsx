import { RiContactsBook3Fill } from 'react-icons/ri';
import css from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/' className={css.logo}>
          <RiContactsBook3Fill className={css.icon} /> PhoneBook
    </Link>
  );
}