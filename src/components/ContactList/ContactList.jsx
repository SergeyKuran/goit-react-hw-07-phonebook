import React from 'react';

//  Імпорт стилів
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
// Компонеет для рендеру списку контактів

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const selector = useSelector(getFilter);
  const dispatch = useDispatch();
  const getVisible = () =>
    contacts.filter(e => e.name.toLowerCase().includes(selector.toLowerCase()));
  const getVisibleContacts = getVisible();

  return (
    <div>
      <ul className={css.ul}>
        {selector &&
          getVisibleContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  dispatch(deleteContacts(id));
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
