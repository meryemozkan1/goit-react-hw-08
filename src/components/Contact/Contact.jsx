import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div>
        <p className={css.text}>👤 {name}</p>
        <p className={css.text}>📞 {number}</p>
      </div>
      <button className={css.button} type="button" onClick={() => dispatch(deleteContact(id))}>
        Sil
      </button>
    </div>
  );
}