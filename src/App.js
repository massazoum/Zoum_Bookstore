import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookComponent from './components/ListBooks';
import Nav from './components/NavBar';
import Categorie from './components/categories/Author';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<BookComponent />} />
        <Route path="/Author" element={<Categorie />} />
      </Routes>
    </main>
  );
}

export default App;
