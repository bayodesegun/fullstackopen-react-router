const Footer = () => {
  const style = {
    marginTop: 10
  }
  return (
    <div style={style}>
      <hr />
      Anecdote app for <a href='https://fullstackopen.com/en/part7' target='_blank' rel="noreferrer">Full Stack Open, Advanced Routing</a>.

      See <a href='https://github.com/bayodesegun/fullstackopen-react-router/tree/main/routed-anecdotes' target='_blank' rel="noreferrer">https://github.com/bayodesegun/fullstackopen-react-router/tree/main/routed-anecdotes</a> for the source code.
    </div>
  )
}

export default Footer
