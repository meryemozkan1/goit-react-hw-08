import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './Registration.module.css';

export default function Registration() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Yeni Hesap Oluştur</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Kullanıcı Adı
          <input type="text" name="name" className={css.input} required />
        </label>
        <label className={css.label}>
          E-posta
          <input type="email" name="email" className={css.input} required />
        </label>
        <label className={css.label}>
          Şifre
          <input type="password" name="password" className={css.input} required />
        </label>
        <button type="submit" className={css.button}>Kayıt Ol</button>
      </form>
    </div>
  );
}