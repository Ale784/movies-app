import './App.css'
import { NavBar } from './components/Navbar'
import { PaginationButtons } from './components/PaginationButtons'
import { useTopMovie } from './hooks/useTopMovies'
import { TopMovies } from './components/TopMovies'
import { usePagination } from './utils/usePagination'

function App () {
  const { nextPage, prevPage, currentPage } = usePagination()
  const { topMovies, totalPages } = useTopMovie({ currentPage })

  return (
    <main className='flex flex-col gap-7 w-full text-font_color'>

      <NavBar />

      <TopMovies topMovies={topMovies} />

      <footer className='flex justify-center items-center p-14'>

        <PaginationButtons
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />

      </footer>

    </main>
  )
}

export default App
