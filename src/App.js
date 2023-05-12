import './App.css';
import React from 'react';
import ListBook from './components/ListBooks';
import Nav from './components/NavBar';
import Form from './components/FormAdd';

function App() {
  return (
    <main>
      <Nav />
      <ListBook />
      <Form />
    </main>
  );
}

export default App;
