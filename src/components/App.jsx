import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import {
  AppContainer,
  AppHeader,
  AppContacts,
} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = formData => {
    const contact = {
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    };

    if (contacts.some(({ name }) => name.toLowerCase() === formData.name.toLowerCase())) {
      Notiflix.Notify.warning('This contact already exists.', { position: 'center' });
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <AppContainer>
      <AppHeader>Phonebook</AppHeader>
      <ContactForm onSubmit={formSubmitHandler} />
      <AppContacts>Contacts</AppContacts>
      <Filter onChange={changeFilter} />
      {contacts.length !== 0 && (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      )}
    </AppContainer>
  );
};