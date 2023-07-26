import css from '../components/App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <>
      <div className={css.phonebook}>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <h3>Contacts</h3>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default App;
