import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
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