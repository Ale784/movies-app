import { IMAGE } from '../../config'
import { useTopMovie } from '../hooks/useTopMovies'
import { usePagination } from '../utils/usePagination'
import { PaginationButtons } from '../components/PaginationButtons'
import { Link } from 'react-router-dom'

export function TopMovies () {
  const { nextPage, prevPage, currentPage } = usePagination()
  const { topMovies, totalPages } = useTopMovie({ currentPage })

  return (
    <section className='flex flex-col gap-6 justify-center items-center'>

      <h2 className='flex items-center justify-center max-w-4xl mx-auto text-3xl font-medium tracking-tight
      font-display text-white sm:text-5xl gap-x-2'
      >Top Movies
      </h2>

      <div className='grid-cols-1
          md:grid hidden sm:grid sm:show sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'
      >
        {topMovies && (

          topMovies.map((movie) => (

            <article
              key={movie.id} className='bg-white rounded overflow-hidden shadow-lg cursor-pointer p-1
              w-52 hover:scale-105'
            >
              <Link to={`/details/${movie.id}`}>
                <img src={`${IMAGE}${movie.poster_path}`} />
                <footer className='px-6 py-4'>
                  <span className='text-gray-700 text-base'>{movie.original_title}</span>
                </footer>
              </Link>
            </article>
          ))

        )}
      </div>

      {/** Mobile view */}
      <div className='grid-cols-1 sm:hidden'>
        <div className='flex flex-col'>
          {topMovies && (

            topMovies.map((movie) => (
              <Link
                to={`/details/${movie.id}`}
                key={movie.id} className='flex items-center
                  bg-[#1F2937] overflow-hidden shadow-lg cursor-pointer p-2
                  border-b-2 border-gray-600'
              >
                <article className='flex items-center w-full'>
                  <img
                    src={`${IMAGE}${movie.poster_path}`} width='100px' height='20px'
                    className='rounded-t-lg '
                  />

                  <footer className='flex flex-col justify-between px-6 py-4 text-white'>
                    <span className='font-bold '>{movie.original_title}</span>
                    <span className='text-base text-gray-400'>Release: {movie.release_date}</span>
                  </footer>
                </article>
              </Link>
            ))

          )}
        </div>
      </div>

      <footer className='flex justify-center items-center p-14'>

        <PaginationButtons
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />

      </footer>
    </section>
  )
}
