import React, { useState } from 'react';

const materials = {
  hardwood: {
    name: 'Hardwood (Maple, Ash, Basswood, Birch, Cherry, Walnut, Poplar, Oak)',
    price: .75
  },
  softwood: {
    name: 'Softwood/Plywood (Pine, Cedar, Balsa, Fir)',
    price: .5
  },
  mdf: {
    name: 'MDF',
    price: .25
  }
}

const App = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('softwood');
  const [height, setHeight] = useState(24);
  const [length, setLength] = useState(24);

  const sqInches = height * length;
  const quote = materials[selectedMaterial].price * sqInches;
  const sqFt = sqInches / 144;

  return (
    <div className="abacus-wrapper">
      <h2 className="title">Cost Estimation</h2>
      <p className="intro">To receive an immediate quote, please fill out the details below</p>
      <form className="form">
        <div className="form-section">
          <label>Select a material: </label>
          <select
            defaultValue={selectedMaterial}
            onBlur={e => setSelectedMaterial(e.target.value)}
            onChange={e => setSelectedMaterial(e.target.value)}
          >
            {
              Object.keys(materials).map(m => <option value={m}>{materials[m].name}</option>)
            }
          </select>
        </div>
        <div className="form-section">
          <label>Height: </label>
          <input
            type="number"
            name="height"
            onChange={e => setHeight(e.target.value)}
            value={height}
          />
        </div>
        <div className="form-section">
          <label>Length: </label>
          <input
            type="number"
            name="length"
            onChange={e => setLength(e.target.value)}
            value={length}
          />
        </div>
      </form>
      <div className="data-wrapper">
        <dl>
          <dt>Square Inches:</dt>
          <dd>{sqInches}</dd>
          <dt>Square Footage:</dt>
          <dd>{sqFt}</dd>
        </dl>
      </div>
      <div className="quote-wrapper">
        <p>Estimate: <span className="green">${quote}</span></p>
      </div>
    </div>
  );
}

export default App;