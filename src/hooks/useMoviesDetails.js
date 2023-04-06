import { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../../config'

export function useMoviesDetails (idMovie) {
  const [movieDetails, setMovieDetails] = useState({})
  useEffect(() => {
    fetch(`${BASE_URL}${idMovie}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(movieData => {
        setMovieDetails(movieData)
      })
  }, [idMovie])

  return { movieDetails }
}
