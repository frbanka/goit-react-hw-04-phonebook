import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
export const Filter = ({ filter, onChange }) => {
  return (
    <input
    className={css.filter__input}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Search contact by name"
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
