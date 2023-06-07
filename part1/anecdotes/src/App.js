import { useState } from 'react'


const Anecdote = ( { anecdotes, selected } ) => {
  return (
    <>
      <div>
        { anecdotes[selected][0] }
      </div>

      { anecdotes[selected][1] === 1 
      ? (
        <div>
          has { anecdotes[selected][1] } vote.
        </div>
      )
      : (
        <div>
          has { anecdotes[selected][1] } votes.
        </div>
      )}
    </>
  )
}


const App = () => {
  const [anecdotes, setAnecdotes] = useState(
    {
      0 : ['If it hurts, do it more often.', 0],
      1 : ['Adding manpower to a late software project makes it later!', 0],
      2 : ['The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 0],
      3 : ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 0],
      4 : ['Premature optimization is the root of all evil.', 0],
      5 : ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 0],
      6 : ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', 0],
      7 : ['The only way to go fast, is to go well.', 0]
    }
  )
  const [selected, setSelected] = useState(0)

  const anecdotesLength = Object.keys(anecdotes).length

  
  const randomAnecdote = (max) => {
    const random = Math.floor(Math.random() * max)
    
    anecdotes[selected] === anecdotes[random] 
    ? randomAnecdote(anecdotesLength) 
    : setSelected(random)

    return 0
  }


  const handleVote = () => {
    const copy = {...anecdotes}
    copy[selected][1] += 1
    
    setAnecdotes(copy)
  }


  return (
    <>
      <Anecdote anecdotes= { anecdotes } selected={ selected } />
      <button onClick={() => handleVote()}>Vote</button>
      <button onClick={() => randomAnecdote(anecdotesLength)}>Next Anecdote</button>
    </>
  )
}

export default App