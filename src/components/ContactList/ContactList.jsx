import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/fetch';
import { getContacts } from 'redux/selector';

import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <div>
      <ul className={css.ul}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
