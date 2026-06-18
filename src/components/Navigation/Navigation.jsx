import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getLinkClass = ({ isActive }) => `${css.link} ${isActive ? css.linkActive : ''}`;

  return (
    <nav>
      <NavLink className={getLinkClass} to="/">
        Anasayfa
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getLinkClass} to="/contacts">
          Rehber
        </NavLink>
      )}
    </nav>
  );
};