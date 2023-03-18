import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_APi_KEY
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const MOVIES_URL = `${BASE_URL}popular?api_key=${API_KEY}&language=en-US`

export function useTopMovie ({ currentPage }) {
  const [topMovies, setTopMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetch(`${MOVIES_URL}&page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        const topMoviesResponse = data.results
        setTopMovies(topMoviesResponse)
        setTotalPages(topMoviesResponse.total_pages)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      })
  }, [currentPage])

  return { topMovies, totalPages }
}
