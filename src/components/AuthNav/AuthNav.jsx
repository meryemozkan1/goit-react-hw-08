import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const getLinkClass = ({ isActive }) => `${css.link} ${isActive ? css.linkActive : ''}`;

  return (
    <div>
      <NavLink className={getLinkClass} to="/register">
        Kayıt Ol
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Giriş Yap
      </NavLink>
    </div>
  );
};