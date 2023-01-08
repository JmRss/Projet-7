import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((error) => setError(error))
    setLoading(false)
  }, [url])

  // useEffect(() => {
  //   setLoading(true)
  //   async function fetch() {
  //     await fetch('../lodging.json')
  //       .then((res) => res.json())
  //       .then((res2) => setData(res2))
  //       .catch((error) => setError(error))
  //   }
  //   fetch()
  //   setLoading(false)
  // }, [url])

  return { isLoading, data, error }
}
