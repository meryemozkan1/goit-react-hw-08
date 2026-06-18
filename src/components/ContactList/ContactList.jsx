import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.nameInfo}>{name}: {number}</span>
          <button onClick={() => dispatch(deleteContact(id))} className={css.button}>
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
}