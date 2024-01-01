import { useState, useEffect } from 'react'
import axios from 'axios'


export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

  const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    const created = response.data
    setResources(resources.concat(created))
    return created
  }

  const update = async (id, newObject) => {
    const response = await axios.put(`${ baseUrl }/${id}`, newObject)
    const updated = response.data
    setResources(resources.map(r => r.id !== id ? r : updated))
    return updated
  }

  useEffect(() => {
    getAll().then((allResources) => setResources(allResources))
  }, [baseUrl])

  const service = {
    create, update, getAll
  }

  return [
    resources, service
  ]
}
