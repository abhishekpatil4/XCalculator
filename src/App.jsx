import { useState } from 'react'
import './App.css'

function App() {
  const [cur, setCur] = useState("");

  return <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>React Calculator</h1>
      <input type="text" value={cur} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <div>
          <button className="custom-button" onClick={() => setCur("hey it works!")}>7</button>
          <button className="custom-button" onClick={() => setCur("hey it works!")}>8</button>
          <button className="custom-button" onClick={() => setCur("hey it works!")}>9</button>
          <button className="custom-button" onClick={() => setCur("hey it works!")}>+</button>
        </div>
      </div>
    </div>
  </>
}
export default App
