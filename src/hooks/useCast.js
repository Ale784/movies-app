/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { API_KEY } from '../../config'

export function useCast (idMovie) {
  if (idMovie === undefined) return null
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${API_KEY}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const results = data.cast.map(({ id, name, profile_path }) => ({
          id,
          name,
          profile_path
        }))

        const filter = results.filter(result => result.profile_path !== null)
        setCast(filter)
      })
  }, [idMovie])

  return { cast }
}
