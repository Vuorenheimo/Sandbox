const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Header = ( { course } ) => <h1>{ course }</h1>


  const Content = ( { parts }) => {
    return (
          <>
            {parts.map(part => <p>{ part }</p>)}
          </>
      )
    }


  const Total = ({ exercises }) => {
    const sum = exercises.reduce((a, b) => a + b, 0)

    return (
      <p>Number of exercises { sum }</p>
    )
  }

  return (
    <div>
      <Header course={ course } />
      <Content parts={ [part1, part2, part3] } />
      <Total exercises={ [exercises1, exercises2, exercises3] } />
    </div>
  )
}

export default App