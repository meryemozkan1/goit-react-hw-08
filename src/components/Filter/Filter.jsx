import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import css from './Filter.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Kişileri isme göre ara</p>
      <input
        type="text"
        value={value}
        className={css.input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}