import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/Filter/Filter'; 
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import css from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Telefon Rehberiniz</h2>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b className={css.loading}>Kişiler yükleniyor...</b>}
      {error && <b className={css.error}>Hata oluştu: {error}</b>}
      <ContactList />
    </div>
  );
}