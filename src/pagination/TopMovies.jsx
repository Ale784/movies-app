import { IMAGE } from '../../config'
import { useTopMovie } from '../hooks/useTopMovies'
import { usePagination } from '../utils/usePagination'
import { PaginationButtons } from '../components/PaginationButtons'
import { Link } from 'react-router-dom'
import { Rating } from '../components/Rating'

export function TopMovies () {
  const { nextPage, prevPage, currentPage } = usePagination()
  const { topMovies, totalPages } = useTopMovie({ currentPage })

  return (
    <section className='flex flex-col gap-2justify-center '>

      <div className='gap grid-cols-1
          md:grid hidden sm:grid sm:show sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'
      >
        {topMovies && (

          topMovies.map((movie) => (

            <article
              key={movie.id} className='overflow-hidden cursor-pointer p-1
               hover:scale-105 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow
             dark:bg-gray-800 dark:border-gray-700'
            >
              <Link to={`/details/${movie.id}`}>
                <img src={`${IMAGE}${movie.poster_path}`} />
                <footer className='px-6 py-4'>
                  <h3 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{movie.original_title}</h3>
                </footer>
                <Rating rating={movie.vote_average} />
              </Link>
            </article>
          ))

        )}
      </div>

      {/** Mobile view */}
      <div className='grid-cols-1 sm:hidden flex items-center justify-center'>
        <div className='flex flex-col w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>

          <div className='flex items-center justify-between mb-4'>
            <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
              Movies:
            </h5>
            <span className='text-gray-900 dark:text-white'>Page {currentPage} out of {totalPages}</span>
          </div>

          <div className='w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
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
