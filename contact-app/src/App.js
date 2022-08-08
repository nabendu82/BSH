import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  })

  const addContactHandler = contact => {
    setContacts([...contacts, { id: contacts.length, ...contact }])
  }

  console.log(contacts);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  const removeContactHandler = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={() => <ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path='/add' component={(props) => <AddContact {...props} addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
