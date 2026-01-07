import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // ДЕКЛАРАТИВНЫЙ СТИЛЬ: React hook useState
  // Мы объявляем состояние, а React сам управляет его обновлением
  const [count, setCount] = useState(0)

  // ИМПЕРАТИВНЫЙ СТИЛЬ: явное вычисление значения
  // Мы говорим "КАК" получить текущий год - вызываем методы объекта Date
  const currentYear = new Date().getFullYear()

   // ДЕКЛАРАТИВНЫЙ СТИЛЬ: JSX описывает "ЧТО" должно быть отображено
  // React сам решает "КАК" это отобразить в DOM
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
         {/* ДЕКЛАРАТИВНЫЙ СТИЛЬ: обработчик onClick декларативно описан */}
        {/* ИМПЕРАТИВНЫЙ СТИЛЬ внутри: стрелочная функция явно вызывает setCount */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </p>
      <p className="read-the-docs">
         {/* ДЕКЛАРАТИВНЫЙ СТИЛЬ: мы описываем, что нужно вставить значение */}
        {currentYear}
      </p>
    </>
  )
}

export default App