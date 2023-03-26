export const Contacts = ({ contacts, contactRemove, children }) => {
  return (
    <section>
      <div>
        {children}
        <ul>
          {contacts.length === 0 ? null : (
            <>
              {contacts.map(contact => {
                return (
                  <li key={contact.id}>
                    <p>
                      <span>{contact.name} : </span>
                      {contact.number}
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
