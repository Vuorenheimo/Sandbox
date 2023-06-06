import { useState } from 'react'


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Header = (props) => <h1>{props.headline}</h1>


  const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


  const Statistics = (props) => {

    const all = props.good + props.bad + props.neutral
    const average = all === 0 ? 0 : (props.good - props.bad) / all
    const positive = all === 0 ? 0 : props.good / all


    return (
      <div>
        <Header headline={props.headline} />
        <div>good {props.good}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.bad}</div>
        <div>all {all}</div>
        <div>average {average}</div>
        <div>positive {positive}</div>
      </div>
    )
  }


  return (
    <div>
      <Header headline={ "give feedback" } />
      <Button text={ "good" } onClick={() => setGood(good + 1)} />
      <Button text={ "neutral" } onClick={() => setNeutral(neutral + 1)} />
      <Button text={ "bad" } onClick={() => setBad(bad + 1)} />
      <Statistics headline={ "statistics" } good={ good } neutral={ neutral } bad={ bad } />
    </div>
  )
}

export default App