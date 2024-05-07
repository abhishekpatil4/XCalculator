import { useState } from 'react'
import './App.css'

function App() {
  const [cur, setCur] = useState("");
  const [res, setRes] = useState();
  return <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>React Calculator</h1>
      <input type="text" value={cur} style={{ margin: '30px', minWidth: "200px" }} />
      {
        res && 
        <div style={{ marginBottom:'10px', fontSize:'25px', color:"gray"}}>
          {res}
        </div>
      }
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
        <div>
          <button className="custom-button">7</button>
          <button className="custom-button">8</button>
          <button className="custom-button">9</button>
          <button className="custom-button">+</button>
        </div>
        <div>
          <button className="custom-button">4</button>
          <button className="custom-button">5</button>
          <button className="custom-button">6</button>
          <button className="custom-button">-</button>
        </div>
        <div>
          <button className="custom-button">1</button>
          <button className="custom-button">2</button>
          <button className="custom-button">3</button>
          <button className="custom-button">*</button>
        </div>
        <div>
          <button className="custom-button">C</button>
          <button className="custom-button">0</button>
          <button className="custom-button">=</button>
          <button className="custom-button">/</button>
        </div>
      </div>
    </div>
  </>
}
export default App
