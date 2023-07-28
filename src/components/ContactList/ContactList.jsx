import React from 'react';

//  Імпорт стилів
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/fetch';
import { getContacts, getFilter } from 'redux/selector';
// Компонеет для рендеру списку контактів

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getVisible = () =>
    contacts.items?.filter(e =>
      e.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  const getVisibleContacts = getVisible();

  return (
    <div>
      <ul className={css.ul}>
        {getVisibleContacts?.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
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
