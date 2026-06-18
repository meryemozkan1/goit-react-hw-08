import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Hoş Geldiniz ☎️</h1>
      <p className={css.subtitle}>Kişisel telefon rehberi uygulamanız.</p>
    </div>
  );
}