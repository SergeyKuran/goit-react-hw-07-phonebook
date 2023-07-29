import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/fetch';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/selector';

import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const selector = useSelector(getFilter);

  const getVisible = () =>
    contacts.filter(e => e.name.toLowerCase().includes(selector.toLowerCase()));
  const getVisibleContacts = getVisible();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.ul}>
        {getVisibleContacts.map(({ id, name, phone }) => (
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
