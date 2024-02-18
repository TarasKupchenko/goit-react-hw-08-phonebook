import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, handleDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li className={css['contact-list-item']}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={css['contact-del-btn']}
      >
        Delete
      </button>
    </li>
  );
};
