import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const Header = (props) => <h1>{props.headline}</h1>


  const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


  const Statistics = (props) => {

    return (
      <div>
        <Header headline={props.headline} />
        <div>good {props.good}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.bad}</div>
        <div>all {props.all}</div>
        <div>average {props.average}</div>
        <div>positive {props.positive}</div>
      </div>
    )
  }


  return (
    <div>
      <Header headline={ "give feedback" } />
      <Button text={ "good" } onClick={() => setGood(good + 1)} />
      <Button text={ "neutral" } onClick={() => setNeutral(neutral + 1)} />
      <Button text={ "bad" } onClick={() => setBad(bad + 1)} />
      <Statistics headline={ "statistics" } good={ good } neutral={ neutral } bad={ bad }
        all={ all } average={ average } positive={ positive } />
    </div>
  )
}

export default App