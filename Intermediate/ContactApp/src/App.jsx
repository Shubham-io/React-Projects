import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const saveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saveContacts) {
      setContacts(JSON.parse(saveContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className="ui container">
        <Router>
          <Header />
          <Switch>
            <Route path="/add" Component={AddContact} />
            <Route path="/" Component={ContactList} />
          </Switch>
          {/* <AddContact addContactHandler={addContactHandler} />
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
