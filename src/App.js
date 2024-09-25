// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BirthdayList from './Components/BirthdayList.js';
import { data } from './data.js';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <BirthdayList people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}


export default App;
