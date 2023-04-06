import { useEffect, useState } from 'react'
import { POPULAR_MOVIES_URL } from '../../config'

export function useTopMovie ({ currentPage }) {
  const [topMovies, setTopMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetch(`${POPULAR_MOVIES_URL}&page=${currentPage}`)
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
