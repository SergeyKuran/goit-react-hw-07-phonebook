import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/fetch';
import { getContacts } from 'redux/selector';
import Notiflix from 'notiflix';

import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispath = useDispatch();
  const selector = useSelector(getContacts);

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const find = selector.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (find) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    }
    Notiflix.Notify.success('Operation success!');

    dispath(addContact({ name, phone: number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button className={css.button} type="submit">
        Add contacts
      </button>
    </form>
  );
};
