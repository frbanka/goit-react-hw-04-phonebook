import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../AddContact/AddContact.module.css';

const MAIN_STATE = {
  name: '',
  number: '',
};

class AddContact extends Component {
  state = MAIN_STATE;

  changeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { whenAdd } = this.props;

    whenAdd({ id: nanoid(), name, number });
    this.resetForm();
  };

  resetForm = () => this.setState(MAIN_STATE);

  render() {
    const { name, number } = this.state;
    return (
      <section className={css.phonebook__section}>
        <div>
          <form onSubmit={this.formSubmit} className={css.phonebook}>
            <label className={css.phonebook__label}>Name</label>
            <input
              className={css.phonebook__input}
              type="text"
              name="name"
              value={name}
              onChange={this.changeForm}
              placeholder="contact name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label className={css.phonebook__label}>Number</label>
            <input
              className={css.phonebook__input}
              type="tel"
              id="number"
              name="number"
              placeholder="phone number"
              onChange={this.changeForm}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button onClick={() => {}} className={css.phonebook__button}>
              Add Contact
            </button>
          </form>
        </div>
      </section>
    );
  }
}
AddContact.propTypes = {
  whenAdd: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
export default AddContact;
