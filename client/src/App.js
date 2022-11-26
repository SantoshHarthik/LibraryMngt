
import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import AddBook from './components/AddBook'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Books from './components/Books';

function App() {
  return (
    <React.Fragment>
      <header >
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/addbook' element={<AddBook />}  />
          <Route path='/aboutus' element={<AboutUs/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
