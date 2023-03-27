import PropTypes from 'prop-types';
import css from '../Contacts/Contacts.module.css';
const Contacts = ({ contacts, contactRemove, children }) => {
  return (
    <section className={css.contacts__section}>
      <div>
        {children}
        <ul>
          {contacts.length === 0 ? null : (
            <>
              {contacts.map(contact => {
                return (
                  <li key={contact.id}>
                    <p>
                      <span>{contact.name}: </span>
                      <span id="number">{contact.number}</span>
                    </p>
                    <button
                      onClick={() => {
                        contactRemove(contact.id);
                      }}
                    >
                      remove
                    </button>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contactRemove: PropTypes.func.isRequired,
};
export default Contacts;
