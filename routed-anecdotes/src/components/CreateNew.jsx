/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'

const CreateNew = ({ addNew, setNotification }) => {
  const { reset: resetContent, ...content } = useField('content')
  const { reset: resetAuthor, ...author  } = useField('author')
  const { reset: resetInfo, ...info  } =  useField('info')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
    setNotification(`a new anecdote '${content.value}' created!`)
    setTimeout(() => setNotification(''), 5000)
  }

  const handleReset = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <input type='button' value='reset' onClick={handleReset} />
      </form>
    </div>
  )

}

export default CreateNew
