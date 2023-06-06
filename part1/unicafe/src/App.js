import { useState } from 'react'


const Header = (props) => <h1>{props.headline}</h1>


const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


const StatisticsLine = (props) => <div>{props.text} {props.value}</div>


const Statistics = (props) => {

  const all = props.good + props.bad + props.neutral
  const average = all === 0 ? 0 : (props.good - props.bad) / all
  const positive = all === 0 ? 0 : props.good / all

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <Header headline={ props.headline } />
      <StatisticsLine text={ "Good" } value={ props.good } />
      <StatisticsLine text={ "Neutral" } value={ props.neural } />
      <StatisticsLine text={ "Bad" } value={ props.bad } />
      <StatisticsLine text={ "All" } value={ all } />
      <StatisticsLine text={ "Average" } value={ average } />
      <StatisticsLine text={ "Positive" } value={ positive } />
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header headline={ "Give feedback" } />
      <Button text={ "Good" } onClick={() => setGood(good + 1)} />
      <Button text={ "Neutral" } onClick={() => setNeutral(neutral + 1)} />
      <Button text={ "Bad" } onClick={() => setBad(bad + 1)} />
      <Statistics headline={ "Statistics" } good={ good } neutral={ neutral } bad={ bad } />
    </div>
  )
}

export default App