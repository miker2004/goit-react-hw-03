import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import './App.css';

const LOCAL_STORAGE_KEY = 'yourContacts';

function App() {
  const [yourContacts, setYourContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedContacts) {
      setYourContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(yourContacts));
  }, [yourContacts]);

  function deleteFromList(contactToDelete) {
    setYourContacts(oldContacts => 
      oldContacts.filter(contact => contact.id !== contactToDelete.id)
    );
  }

  const filteredContacts = yourContacts.filter((contact) => 
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  const addContact = (newContact) => {
    setYourContacts((prev) => [...prev, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteFromList={deleteFromList} />
    </div>
  );
}

export default App;
