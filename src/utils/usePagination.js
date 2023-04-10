import { useState } from 'react'

export function usePagination () {
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return { nextPage, prevPage, currentPage }
}
