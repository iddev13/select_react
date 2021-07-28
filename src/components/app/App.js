import { useState } from 'react';
import Select from '../select/Select'
import './App.css';
import { languages } from '../../data';
import Select2 from '../select2/Select2';



function App() {

  const [selected, setSelected] = useState(); // First select

  const [selectedLanguages, setSelectedLanguages] = useState([]) // Second select

  return (
    <div className="App">

      <Select selected={selected} setSelected={setSelected} />

      <Select2 title="Select your skills:" value={selectedLanguages} onChange={(v) => setSelectedLanguages(v)} options={languages} />

    </div>
  );
}

export default App;
