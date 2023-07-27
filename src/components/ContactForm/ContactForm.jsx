import { useEffect, useState } from 'react';

// Імпорт стилів
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/fetch';

// Клас для відображення форми
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispath = useDispatch();

  useEffect(() => {
    const fetch = fetchContacts();
    console.log(fetch);
  }, []);

  //  Метод зв'язки данних імпуту зі стейтом
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

  //  Метод для форми
  const handleSubmit = evt => {
    evt.preventDefault();

    dispath(addContact({ name, phone: number }));
    //Анулювання введених данних
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
