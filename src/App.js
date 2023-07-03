import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';

const drugs = [
  { value: 0.15, label: 'Codeine' },
  { value: 2.4, label: 'Fentanyl Transdermal' },
  { value: 1.0, label: 'Hydrocodone' },
  { value: 5.0, label: 'Hydromorphone' },
  { value: 4.7, label: 'Methadone' },
  { value: 1.0, label: 'Morphine' },
  { value: 1.5, label: 'Oxycodone' },
  { value: 3.0, label: 'Oxymorphone' },
  { value: 0.4, label: 'Tapentadol' },
  { value: 0.2, label: 'Tramadol' },
];

function App() {
  const [strengthPerUnit, setStrengthPerUnit] = useState(0);
  const [units, setUnits] = useState(0);
  const [daysSupply, setDaysSupply] = useState(0);
  const [mmePerDay, setMmePerDay] = useState(0);
  const [selectedDrug, setSelectedDrug] = useState(null);

  const calculateMME = () => {
    if (!selectedDrug) return; // Don't calculate if no drug is selected

    let mme = (strengthPerUnit * (units / daysSupply) * selectedDrug.value);
    setMmePerDay(mme);
  };

  return (
    <div className="App">
      <form>
        <input type="number" onChange={e => setStrengthPerUnit(e.target.value)} placeholder="Strength per Unit" />
        <input type="number" onChange={e => setUnits(e.target.value)} placeholder="Units" />
        <input type="number" onChange={e => setDaysSupply(e.target.value)} placeholder="Days Supply" />
        <Select 
          options={drugs} 
          onChange={setSelectedDrug} 
          placeholder="Select a drug" 
          isSearchable 
        />
        <button type="button" onClick={calculateMME}>Calculate</button>
        <div className="resultBox">
            <p>MME/Day: {mmePerDay}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
