import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        E-posta
        <input type="email" name="email" className={css.input} required />
      </label>
      <label className={css.label}>
        Şifre
        <input type="password" name="password" className={css.input} required />
      </label>
      <button type="submit" className={css.button}>Giriş Yap</button>
    </form>
  );
}