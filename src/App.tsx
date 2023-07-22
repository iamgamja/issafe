import { useState } from 'react'
import './App.css'
import { create, all } from 'mathjs'
import Decimal from 'decimal.js'
import { data } from './data'
import { Check } from './components/Check'

const math = create(all)
const limitedEvaluate = math.evaluate

math.config({
  number: 'BigNumber',
  precision: 64,
  epsilon: 1e-60,
})

math.import(
  {
    import: function () {
      throw new Error('Function import is disabled')
    },
    createUnit: function () {
      throw new Error('Function createUnit is disabled')
    },
    evaluate: function () {
      throw new Error('Function evaluate is disabled')
    },
    parse: function () {
      throw new Error('Function parse is disabled')
    },
    simplify: function () {
      throw new Error('Function simplify is disabled')
    },
    derivative: function () {
      throw new Error('Function derivative is disabled')
    },
  },
  { override: true }
)

function App() {
  const [input, setInput] = useState('')

  const num = (() => {
    // 쉼표, 공백, 작은따옴표를 무시
    const replaced_string = input.replaceAll(/[, ']/g, '')
    if (!replaced_string) return new Decimal(0)

    try {
      const res = limitedEvaluate(replaced_string)
      if (!(res instanceof Decimal)) return new Decimal(NaN)
      return res
    } catch (e) {
      return new Decimal(NaN)
    }
  })()

  return (
    <div className="App">
      <h3>{num.toNearest(0.001).toString()}</h3>
      <h4>{num.div(100000000).toNearest(0.001).toString()}s</h4>

      <input value={input} onChange={(e) => setInput(e.target.value)} autoFocus></input>

      <>
        {Object.entries(data).map(([name, limit], i) => (
          <Check key={i} name={name} n={num} min={limit[0]} max={limit[1]} />
        ))}
      </>
    </div>
  )
}

export default App
