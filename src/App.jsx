import { useState } from 'react'
import './App.css'

function App() {
  const [cur, setCur] = useState("");
  const [res, setRes] = useState();

  const handleCalculate = () => {
    setRes(eval(cur))
  }
  return <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>React Calculator</h1>
      <input type="text" value={cur} style={{ margin: '30px', minWidth: "200px" }} />
      {
        res &&
        <div style={{ marginBottom: '10px', fontSize: '25px', color: "gray" }}>
          {res}
        </div>
      }
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
        <div>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "7")}>7</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "8")}>8</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "9")}>9</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "+")}>+</button>
        </div>
        <div>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "4")}>4</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "5")}>5</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "6")}>6</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "-")}>-</button>
        </div>
        <div>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "1")}>1</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "2")}>2</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "3")}>3</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "*")}>*</button>
        </div>
        <div>
          <button className="custom-button" onClick={() => {setCur([]); setRes([])}}>C</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "0")}>0</button>
          <button className="custom-button" onClick={handleCalculate}>=</button>
          <button className="custom-button" onClick={() => setCur((prev) => prev + "/")}>/</button>
        </div>
      </div>
    </div>
  </>
}
export default App
