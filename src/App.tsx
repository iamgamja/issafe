import { useState } from 'react'
import './App.css'
import { Check } from './components/Check'
import { data } from './data'

function App() {
  const [input, setInput] = useState('0')
  const num = (() => {
    // 쉼표, 공백, 작은따옴표를 무시
    const replaced_string = input.replaceAll(/[, ']/g, '')

    // 지수 표기법 (e.g. 1e9) 처리
    if (input.includes('e')) {
      try {
        const [a, b] = replaced_string.split('e').map(BigInt)
        return a * 10n ** b
      } catch (e) {
        if (e instanceof SyntaxError || e instanceof RangeError) return NaN
        throw e
      }
    }

    // bigint로 변환
    try {
      return BigInt(replaced_string)
    } catch (e) {
      if (e instanceof SyntaxError) return NaN
      throw e
    }
  })()

  return (
    <div className="App">
      <h3>Is {num.toLocaleString('ko')} Safe Integer?</h3>

      <input value={input} onChange={(e) => setInput(e.target.value)} autoFocus></input>

      <>
        {Object.entries(data).map(([name, limit]) => (
          <Check name={name} n={num} limit={limit} />
        ))}
      </>
    </div>
  )
}

export default App
