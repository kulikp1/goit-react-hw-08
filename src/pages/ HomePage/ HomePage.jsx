import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>
        Welcome to PhoneHUB:
        <br />
        Your Ultimate Connection Manager
      </h1>
      <h3 className={css.subTitle}>
        PhoneHUB offers the following features to ensure a more comfortable and
        seamless experience:
      </h3>
      <ul className={css.list}>
        <li>
          User-Friendly Interface: Easy to navigate and use for all age groups.
        </li>
        <li>
          Smart Search: Quickly find contacts with an intelligent search bar.
        </li>
        <li>
          Quick Add Contacts: Instantly add new contacts with a streamlined,
          one-tap process.
        </li>
        <li>
          Quick Edit Mode: Enter a quick edit mode to make rapid changes to
          contact information.
        </li>
        <li>and many more features</li>
      </ul>

      <h3>
        To use the app, please{' '}
        <Link to="/login" className={css.homePageLink}>
          log in
        </Link>{' '}
        to your account or{' '}
        <Link to="/register" className={css.homePageLink}>
          register
        </Link>{' '}
        if you are a new user.
      </h3>
    </div>
  );
}